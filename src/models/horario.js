const Sequelize  = require('Sequelize');

module.exports = (sequelize, DataTypes) => {
    const Horario = sequelize.define("Horario", {
        idHorario: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull : false
        },
        dia: {
            type: Sequelize.DATEONLY,
            allowNull : false
        },
        horaApertura: {
            type: Sequelize.TIME,
            allowNull : false
        },
        horaCierre: {
            type: Sequelize.TIME,
            allowNull : false
        },
    },{
        freezeTableName: true,     //Model tablename will be the same as the model
        timestamps: false
    });

    return Horario;
}
