const Sequelize  = require('Sequelize');

module.exports = (sequelize, DataTypes) => {
    const Servicio = sequelize.define("Servicio", {
        idServicio: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull : false
        },
        nombreServicio: {
            type: Sequelize.STRING(250),
            allowNull : false
        }
    },{
        freezeTableName: true,     //Model tablename will be the same as the model
        timestamps: false
    });

    return Servicio;
}
