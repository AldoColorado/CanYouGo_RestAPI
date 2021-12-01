const Sequelize  = require('Sequelize');

module.exports = (sequelize, DataTypes) => {
    const Sucursal = sequelize.define("Sucursal", {
        idSucursal: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull : false
        },
        ciudad: {
            type: Sequelize.STRING(50),
            allowNull : false
        },  
        colonia: {
            type: Sequelize.STRING(50),
            allowNull : false
        },  
        direccion: {
            type: Sequelize.STRING(50),
            allowNull : false
        }, 
        diasApertura: {
            type: Sequelize.STRING(50),
            allowNull : false
        },   
        horario: {
            type: Sequelize.STRING(50),
            allowNull : false
        }, 
        telefono: {
            type: Sequelize.STRING(50),
            allowNull : false
        }, 
    },{
        freezeTableName: true,     //Model tablename will be the same as the model
        timestamps: false
    });

    return Sucursal;
}
