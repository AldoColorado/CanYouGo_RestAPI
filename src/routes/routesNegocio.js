const express = require('express');
const routerNegocio = express.Router();
const controller = require("../controller/negocioDAO");

routerNegocio.get('/Negocio', controller.getNegocios);
routerNegocio.get('/Negocio/:nombre', controller.buscarNegocio);
//routerNegocio.get('/Negocio/:idArtista', controller.getNegocioByArtista);
routerNegocio.post('/Negocio', controller.createNegocio);
routerNegocio.delete('/Negocio/:nombreNegocio', controller.deleteNegocio);
//routerNegocio.put('/Negocio/:nombreNegocio', controller.updateNegocio);


module.exports = routerNegocio;