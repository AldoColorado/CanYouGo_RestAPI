const express = require('express');
const database = require("../models");


module.exports = {
    async getDueños(req, res) {
        return database.Dueño.findAll().then(dueños => res.send(dueños));
    },

    async getDueño(req, res) {
        database.Dueño.findOne({
            where: {
                username : req.params.username
            }
        }).then(dueño => {
            if(dueño == null){
                return res.sendStatus(404);
            }else{
                return res.status(200).send(dueño)
            }
        });
    },

    async getDueñoByNombre(req, res) {
        database.Dueño.findOne({
            where: {
                nombreArtista : req.params.nombreArtista
            }
        }).then(dueño => {
            if(dueño == null){
                return res.sendStatus(404);
            }else{
                return res.status(200).send(dueño)
            }
        });
    },



    async createDueño(req, res) {
        return database.Dueño.create({
            idDueño: req.body.idDueño,
            RFC: req.body.RFC,
            username: req.body.username    
        }).then(submitedDueño => res.send(submitedDueño));
    },

    async deleteDueño(req, res) {
        return database.Dueño.destroy({
            where: {
                username: req.params.username
            }
        }).then(() => res.sendStatus(200));
    },

    async updateDueño(req, res) {
        return database.Dueño.update({
            RFC: req.body.RFC,
        }, {
            where: {
                username: req.params.username
            }
        }).then(() => res.sendStatus(200));
    }
}