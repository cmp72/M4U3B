var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('galeria');//me toma galeria.hbs. Podemos usar una plantilla que diseñamos y se va a ver en el navegador
  //Si en lugar de render usara res.send solamente, en este caso veríamos la palabra galería.
});

module.exports = router;
