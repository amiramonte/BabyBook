const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Family extends Model {}

Family.init({

    groupname: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        unique: {
            args: true,
            msg: 'Group name already exists'
        }
    },

},{
    sequelize,
});

module.exports = Family 