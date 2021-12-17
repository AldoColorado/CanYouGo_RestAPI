const Sequelize  = require('Sequelize');

module.exports = (sequelize, DataTypes) => {
    const MedidasSanitarias = sequelize.define("MedidasSanitarias", {
        idMedidasSanitarias: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull : false
        },
        medida: {
            type: Sequelize.STRING(250),
            allowNull : false
        },
    },{
        freezeTableName: true,     //Model tablename will be the same as the model
        timestamps: false
    });

    return MedidasSanitarias;
}
