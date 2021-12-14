const Sequelize  = require('Sequelize');

module.exports = (sequelize, DataTypes) => {
    const Sucursal = sequelize.define("Sucursal", {
        idSucursal: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull : false
        },
        aforoActual: {
            type: Sequelize.STRING(50),
            allowNull : false
        },  
        capacidad: {
            type: Sequelize.STRING(50),
            allowNull : false
        },    
        direccion: {
            type: Sequelize.STRING(50),
            allowNull : false
        }, 
        latitud: {
            type: Sequelize.STRING(50),
            allowNull : false
        }, 
        longitud: {
            type: Sequelize.STRING(50),
            allowNull : false
        }, 
        telefono: {
            type: Sequelize.STRING(50),
            allowNull : false
        }, 
        medidasSanitarias: {
            type: Sequelize.STRING(50),
            allowNull : false
        },
        foto: {
            type: Sequelize.STRING(250),
            allowNull : false
        },  
        fotoPortada: {
            type: Sequelize.STRING(250),
            allowNull : false
        },
    },{
        freezeTableName: true,     //Model tablename will be the same as the model
        timestamps: false
    });

    return Sucursal;
}
