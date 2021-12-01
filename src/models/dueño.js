const Sequelize  = require('Sequelize');

module.exports = (sequelize, DataTypes) => {
    const Dueño = sequelize.define("Dueño", {
        idDueño: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull : false
        },
        RFC: {
            type: Sequelize.STRING(50),
            allowNull : false
        },
    },{
        freezeTableName: true,     //Model tablename will be the same as the model
        timestamps: false
    });

    return Dueño;
}
