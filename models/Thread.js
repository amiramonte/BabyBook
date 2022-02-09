const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Thread extends Model {}

Thread.Init({

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },

},{
    sequelize,
});

module.exports = Thread 

