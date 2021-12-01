const Sequelize  = require('Sequelize');

module.exports = (sequelize, DataTypes) =>{
    const Cliente = sequelize.define("Cliente", {
        idCliente: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull : false
        },
    },{
        freezeTableName: true,      //Model tablename will be the same as the model
        timestamps: false
    });
    
    return Cliente;
};