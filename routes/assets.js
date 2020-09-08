var express = require('express');
const request = require('request');
var router = express.Router();
const path = require('path');

const respuesta = (req, res) => {
  var fullUrl = 'https://mbaas.desa.co.davivienda.com/catalogo/v1'+ req.originalUrl;
  // var fullUrl = ''+ req.originalUrl;
  request(fullUrl, { json: true }, (err, res2, body) => {
    if( err || res2.body.length === 0) {
      console.warn('====XXXXX>        ', fullUrl);
      const query = req.query;
      file = req.params.asset_id;
      file = `${file}.txt`
      res.sendFile(file, { root: path.join(__dirname, '../assets') });
      return;
    }
    return res.send(res2.body);
  });  
};
router.get('/:asset_id', respuesta);
router.get('/:asset_id/:filtro', respuesta);
module.exports = router;