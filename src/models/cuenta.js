const Sequelize  = require('Sequelize');

module.exports = (sequelize, DataTypes) => {
    const Cuenta = sequelize.define("Cuenta", {
        username: {
            type: Sequelize.STRING(50),
            primaryKey: true,
            allowNull : false
        },
        nombre: {
            type: Sequelize.STRING(50),
            allowNull : false
        },
        apellidos: {
            type: Sequelize.STRING(50),
            allowNull : false
        },
        correo: {
            type: Sequelize.STRING(50),
            allowNull : false
        },
        password: {
            type: Sequelize.STRING(150),
            allowNull : false
        },
        telefono: {
            type: Sequelize.STRING(150),
            allowNull : false
        },
        tipoUsuario: {
            type: Sequelize.STRING(50),
            allowNull: false
        }
    },{
        freezeTableName: true,     //Model tablename will be the same as the model
        timestamps: false
    });

    return Cuenta;
}
