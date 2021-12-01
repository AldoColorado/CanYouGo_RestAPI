const express = require('express');
const routerCuenta = express.Router();
const controller = require('../controller/cuentaDAO');
const verifyToken = require('../middlewares/checkToken');

routerCuenta.get('/Cuenta',controller.getCuentas);
routerCuenta.get('/Cuenta/:username', controller.getCuenta);
routerCuenta.post('/Cuenta',controller.createCuenta);
routerCuenta.delete('/Cuenta/:username', controller.deleteCuenta);
routerCuenta.put('/Cuenta/:username', controller.updateCuenta);


module.exports = routerCuenta;