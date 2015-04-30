var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*Now we try to get Editor page*/
router.get('/editor', function(req, res, next) {
  res.render('editor', { title: 'Collaborative editor!' });
});

module.exports = router;
