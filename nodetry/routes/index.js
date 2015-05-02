var express = require('express');
var router = express.Router();

/* GET home page. 127.0.0.1:5000/ */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Collaboration!' });
});

/* GET Hello World page.i.e. 127.0.0.1:5000/helloworld */
router.get('/pad', function(req, res) {
    res.render('pad', { title: 'GDFR' })
});

module.exports = router;
