const express = require('express');
const routerCliente = express.Router();
const controller = require("../controller/clienteDAO");

routerCliente.get('/Cliente', controller.getClientes);
routerCliente.get('/Cliente/:username', controller.getCliente);
routerCliente.post('/Cliente', controller.createCliente);
routerCliente.delete('/Cliente/:username', controller.deleteCliente);
routerCliente.put('/Cliente/:username', controller.updateCliente);


module.exports = routerCliente;