const express = require('express');
const database = require("../models")

module.exports = {
    async getSucursales(req, res) {
        return database.Sucursal.findAll().then(Sucursales => res.send(Sucursales));
    },

    async getSucursal(req, res) {
        return database.Sucursal.findOne({
            include: {
                model: database.Cancion, as: "Cancion",
                attributes: ['idCancion', 'nombreCancion', 'imagenCancion', 'track']
            },
            where: {
                nombreSucursal : req.params.nombreSucursal
            }
        }).then(Sucursal => {
            if(Sucursal == null){
                res.sendStatus(404)
            }else{
                res.status(200).send(Sucursal)
            }
        });
    },

    async getSucursalesBy(req, res) {
        return database.Sucursal.findAll({
            where: {
                idSucursal : req.params.idSucursal
            }
        }).then(Sucursal => {
            if(Sucursal.length == 0){
                res.sendStatus(404)
            }else{
                res.status(200).send(Sucursal)
            }
            }
        );
    },

    async createSucursal(req, res) {
        return database.Sucursal.create(req.body).then(submitedSucursal => res.status(200).send(submitedSucursal));
    },

    async deleteSucursal(req, res) {
        return database.Sucursal.destroy({
            where: {
                nombreSucursal: req.params.nombreSucursal
            }
        }).then(() => res.sendStatus(200));
    },

    async updateSucursal(req, res) {
        return database.Sucursal.update({
            nombreSucursal: req.body.nombreSucursal,
            anioLanzamiento: req.body.anioLanzamiento,
            imagenSucursal: req.body.imagenSucursal
        }, {
            where: {
                nombreSucursal: req.params.nombreSucursal
            }
        }).then(() => res.sendStatus(200));
    }
}