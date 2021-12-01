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
            type: Sequelize.STRING(50),
            allowNull : false
        },  
    },{
        freezeTableName: true,     //Model tablename will be the same as the model
        timestamps: false
    });

    return Reservacion;
}
