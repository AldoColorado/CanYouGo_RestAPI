const express = require('express');
const database = require("../models")
const bcrypt = require('bcryptjs');



module.exports = {
    async getCuentas(req, res) {
        return database.Cuenta.findAll().then(cuentas => res.send(cuentas));
        
    },

    async getCuenta(req, res){
        return database.Cuenta.findOne({
            where: {
                username : req.params.username
            }
        }).then(cuenta => 
            {
                if(!cuenta){
                    res.sendStatus(404);
                }else{
                    res.send(cuenta);
                }
            });
    },

    async createCuenta(req, res) {
        req.body.password = bcrypt.hashSync(req.body.password, 10);    

        return database.Cuenta.findOne({
            where: {
                username : req.body.username
            }
        }).then(cuenta => 
            {
                if(!cuenta){
                    return database.Cuenta.create(req.body).then(
                        submitedCuenta => {
                            if(!submitedCuenta){
                                res.sendStatus(400);
                            }else{
                                res.status(200).json({
                                    username: submitedCuenta.username,
                                    correo: submitedCuenta.correo
                                });
                            }
                        }
                    );
                }else{
                    res.json({
                        status: "La cuenta ya existe"
                    })
                }
            });

       
    },

    async deleteCuenta(req, res) {
        return database.Cuenta.destroy({
            where: {
                username: req.params.username
            }
        }).then(() => res.sendStatus(200));
    },

    async updateCuenta(req, res) {
        console.log(req.params.username)
        return database.Cuenta.update({
            username: req.body.username,
            correo: req.body.correo,
            password: req.body.password,
            tipoUsuario: req.body.tipoUsuario
        }, {
            where: {
                username: req.params.username
            }
        }).then(cuentaActualizada => res.sendStatus(200))
    }
}