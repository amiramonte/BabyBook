const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Thread extends Model {}

Thread.init({

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

