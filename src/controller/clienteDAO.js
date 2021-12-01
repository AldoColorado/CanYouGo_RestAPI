const express = require('express');
const database = require("../models")

module.exports = {
    async getClientes(req, res) {
        return database.Cliente.findAll().then(clientes => {
            if(!clientes){
                res.sendStatus(404);
            }else{
                res.send(clientes);
            }
        })  
    },

    async getCliente(req, res) {
        return database.Cliente.findOne({
            where: {
                username : req.params.username
            }
        }).then(cliente => {
            if(cliente == null){
                return res.sendStatus(404);
            }else{
                return res.status(200).json({
                    idConsumidor: cliente.idConsumidor,
                    nombre: cliente.nombre,
                    apellidos: cliente.apellidos,
                    username: cliente.username,
                    status: "Success"
                });
            }
        })
    },

    async createCliente(req, res) {
        return database.Cliente.create({
            idCliente: req.body.idCliente,
            username: req.body.username
        }).then(submitedCliente => res.send(submitedCliente));
    },

    async deleteCliente(req, res) {
        return database.Cliente.destroy({
            where: {
                username: req.params.username
            }
        }).then(() => res.send("Deleted Cliente"));
    },

    async updateCliente(req, res) {
        return database.Cliente.update({
            idConsumidor: req.body.idConsumidor,
            nombre: req.body.nombre,
            apellidos: req.body.apellidos
        }, {
            where: {
                username: req.params.username
            }
        }).then(() => res.sendStatus(200));
    }
}