var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

//adding cors code here 
var cors = require('cors');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//adding cors code here 
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);









  var ShareJS, ShareJSOpts, connect, port, server;

  connect = require('connect');

  ShareJS = require('share').server;

  ShareJSOpts = {
    browserChannel: {
      cors: "*"
    },
    db: {
      type: "none"
    }
  };

  server = connect();

  server.use(connect['static'](__dirname + "/public"));

  ShareJS.attach(server, ShareJSOpts);

  port = 5000;

  server.listen(port, function() {
    return console.log("Listening on " + port);
  });











/*//gonna try this later on if earlier doesnt work 
app.get('/products/:id', function(req, res, next){
  res.json({msg: 'This is CORS-enabled for all origins!'});
});
*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

/*
//sharejs code added here
var connect = require('connect'),
    sharejs = require('share').server;

var server = connect(
      connect.logger(),
      connect.static(__dirname + '/public')
    );
var options = {db: {type: 'none'}}; // See docs for options. {type: 'redis'} to enable persistance.

// Attach the sharejs REST and Socket.io interfaces to the server
sharejs.attach(server, options);

//giving port 8000 here for sharejs server to run
server.listen(8000, function(){
    console.log('Server running at http://127.0.0.1:8000/');
});
//sharejs code ends here
*/
/*var server = connect(
      connect.logger(),
      connect.static(__dirname + '/public')
    );
server.listen(8000, function(){
    console.log('Server running at http://127.0.0.1:8000/');*/

module.exports = app;

/*

//sharejs new wiki code here
var livedb = require('livedb');
var sharejs = require('share');

var backend = livedb.client(livedb.memory());
var share = require('share').server.createClient({backend: backend});


var Duplex = require('stream').Duplex;
var browserChannel = require('browserchannel').server

/*var share = require('share').server.createClient({backend: backend});
var app = require('express')();*/
/*
app.use(browserChannel({webserver: express}, function(client) {
  var stream = new Duplex({objectMode: true});

  stream._read = function() {};
  stream._write = function(chunk, encoding, callback) {
    if (client.state !== 'closed') {
      client.send(chunk);
    }
    callback();
  };

  client.on('message', function(data) {
    stream.push(data);
  });

  client.on('close', function(reason) {
    stream.push(null);
    stream.emit('close');
  });

  stream.on('end', function() {
    client.close();
  });

  // Give the stream to sharejs
  return share.listen(stream);
}));
//sharejs new wiki code ends
*/

