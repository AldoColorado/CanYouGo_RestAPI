const express = require('express');
const routesCuenta = require('../routes/routesCuenta');
const routesDueño = require('./routesDueño');
const routesCliente = require('./routesCliente');
const routesNegocio = require('./routesNegocio');
const routesAuth = require('./routesAuth');
const routesFiles = require('./routesFiles');
const routesEmailer = require('./routesEmailer');
const routesSucursal = require('./routesSucursal');

module.exports = {
    routesCuenta : routesCuenta,
    routesDueño : routesDueño,
    routesCliente : routesCliente,
    routesNegocio : routesNegocio,
    routesAuth : routesAuth,
    routesFiles: routesFiles,
    routesEmailer: routesEmailer,
    routesSucursal: routesSucursal,
}