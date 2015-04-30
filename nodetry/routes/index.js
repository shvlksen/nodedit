var express = require('express');
var router = express.Router();

/* GET home page. 127.0.0.1:5000/*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Collaboration yo!' });
});

/* GET Hello World page.i.e. 127.0.0.1:5000/helloworld? */
router.get('/helloworld', function(req, res) {
    res.render('thrifty', { title: 'GDFR' })
});

module.exports = router;
