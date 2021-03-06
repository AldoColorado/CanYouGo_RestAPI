const Sequelize  = require('Sequelize');

module.exports = (sequelize, DataTypes) => {
    const Reservacion = sequelize.define("Reservacion", {
        idReservacion: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull : false
        },
        fecha: {
            type: Sequelize.DATEONLY,
            allowNull : false
        }, 
        hora: {
            type: Sequelize.TIME,
            allowNull : false
        },  
        cantidadLugares: {
            type: Sequelize.INTEGER,
            allowNull : false
        },  
    },{
        freezeTableName: true,     //Model tablename will be the same as the model
        timestamps: false
    });

    return Reservacion;
}
