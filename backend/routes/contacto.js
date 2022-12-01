var express = require('express');
var router = express.Router();
var difusionModel = require('../models/difusionModel')


router.get('/', function(req, res, next) {
  res.render('contacto', {
    layout: 'admin/layout'
  })
  
});
module.exports = router;
