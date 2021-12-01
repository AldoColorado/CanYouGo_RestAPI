const express = require('express');
const routerDueño = express.Router();
const controller = require("../controller/dueñoDAO");

routerDueño.get('/Duenio', controller.getDueños);
routerDueño.get('/Duenio/:username', controller.getDueño);
//routerDueño.get('/Dueño/Nombre/:nombreDueño', controller.getDueñoByNombre);
routerDueño.post('/Duenio', controller.createDueño);
routerDueño.delete('/Duenio/:username', controller.deleteDueño);
routerDueño.put('/Duenio/:username', controller.updateDueño);


module.exports = routerDueño;