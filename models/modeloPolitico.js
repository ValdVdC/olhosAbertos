
var { DataTypes, Sequelize } = require('sequelize');
var { sequelize } = require('../config/database');

var Politico = sequelize.define('Politico', {
    id:{
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        allowNull: false   
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false
    },
    partido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    tableName: 'politicos',
    timestamps: false
});

module.exports = Politico;
