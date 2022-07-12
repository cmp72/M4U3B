var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('prueba');//me toma prueba.hbs
});

module.exports = router;
