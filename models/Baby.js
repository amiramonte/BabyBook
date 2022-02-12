const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Baby extends Model {}

Baby.init({

    babyFirstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    babyLastName: {
        type: DataTypes.STRING,
        allowNull: false
    }

},{
    sequelize,
});

module.exports = Baby 