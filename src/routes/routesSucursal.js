const express = require('express');
const routerSucursal = express.Router();
const controller = require('../controller/sucursalDAO');

routerSucursal.get('/Sucursal',controller.getSucursales);
routerSucursal.get('/Sucursal/:idSucursal', controller.getSucursal);
routerSucursal.post('/Sucursal',controller.createSucursal);
routerSucursal.delete('/Sucursal/:idSucursal', controller.deleteSucursal);
routerSucursal.put('/Sucursal/:username', controller.updateSucursal);


module.exports = routerSucursal;