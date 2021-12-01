const express = require('express');
const router = express.Router();
const controller = require("../controller/authDAO");

router.post('/Login', controller.login);

module.exports = router;