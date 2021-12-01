const database = require("../models");
const cuentaDAO = require("./cuentaDAO");
const bcrypt = require('bcryptjs');
const token = require('../utils/token');

module.exports = {
    async login(req, res) {
        database.Cuenta.findOne({where: 
            {username: req.body.username}
        }).then(cuenta => {
            if(cuenta == null){
                return res.status(404).json({
                    error: true,
                    message: 'Usuario o contrasenia incorrecta'
                })
            }
            if(!cuenta.username || !cuenta.password){
                return res.status(404).json({
                    error: true,
                    message: 'Usuario o contrasenia incorrecta'
                });
            }else{
                const contraseniaCorrecta = bcrypt.compareSync(req.body.password, cuenta.password, 10);
                if(contraseniaCorrecta){  
                    return res.status(200).json({
                        username: cuenta.username,
                        authToken: token(cuenta),
                        tipoUsuario: cuenta.tipoUsuario,
                    })     
                }else{
                    return res.status(404).json({
                        error: true,
                        message: 'Usuario o contrasenia incorrecta'
                    })
                }
            }
        })
    }  
}