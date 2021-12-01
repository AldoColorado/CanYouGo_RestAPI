const express = require('express');
const routerEmailer = express.Router();
const controller = require("../controller/emailer");

routerEmailer.post('/EmailService', controller.EnviarEmail);

module.exports = routerEmailer;