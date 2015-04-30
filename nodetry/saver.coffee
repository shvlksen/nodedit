# This script watches for changes in a document and constantly resaves a file
# with the document's contents.
#
# Usage: coffee saver.coffee -d <DOCNAME> [--url http://somehost:8000/sjs] [-f filename]
 
client = require('share').client
fs = require('fs')
 
argv = require('optimist')
	.usage('Usage: $0 -d docname [--url URL] [-f filename]')
	.default('d', 'hello')
	.default('url', 'http://sharejs.org:8000/sjs')
	.argv
 
filename = argv.f || argv.d
 
console.log "Opening '#{argv.d}' at #{argv.url}. Saving to '#{filename}'"
 
timeout = null
doc = null
 
# Rate limit writes to the file at once per second.
write = ->
	if (timeout == null)
		timeout = setTimeout ->
        console.log "Saved version " + doc.version
        fs.writeFile filename, doc.snapshot
        timeout = null
      , 1000
 
client.open argv.d, 'text', argv.url, (error, d) ->
	doc = d
	console.log('Document ' + argv.d + ' open at version ' + doc.version)
 
	write()
	doc.on 'change', (op) ->
		write()