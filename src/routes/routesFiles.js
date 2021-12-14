const express = require('express');
const routerFile = express.Router();
const controller = require("../controller/uploadFile");
const Multer = require('multer');
const path = require('path');

const {Storage} = require('@google-cloud/storage');

const multer = Multer({
    storage: Multer.memoryStorage(),
})


routerFile.post('/File', multer.single("archivo"), controller.uploadArchivo);

module.exports = routerFile;