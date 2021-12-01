const Sequelize  = require('Sequelize');

module.exports = (sequelize, DataTypes) => {
    const Negocio = sequelize.define("Negocio", {
        idNegocio: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull : false
        },
        nombre: {
            type: Sequelize.STRING(50),
            allowNull : false
        },  
        correo: {
            type: Sequelize.STRING(50),
            allowNull : false
        },  
        descripción: {
            type: Sequelize.STRING(50),
            allowNull : false
        }, 
        metodosPago: {
            type: Sequelize.STRING(50),
            allowNull : false
        },   
        medidasSanitarias: {
            type: Sequelize.STRING(50),
            allowNull : false
        }, 
    },{
        freezeTableName: true,     //Model tablename will be the same as the model
        timestamps: false
    });

    return Negocio;
}
