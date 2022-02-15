const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/config');

class User extends Model {
    checkPassword(loginPassword){
        return bcrypt.compareSync(loginPassword, this.password)
    }
}

User.init({

    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        unique: {
            args: true,
            msg: 'Username already in use'
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        },
        unique: {
            args: true,
            msg: 'Email already exists'
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            len: 8
        }
    },

},{
    sequelize,
    hooks: {
        beforeCreate: async (newUserData) => {
            newUserData.password = await bcrypt.hash(newUserData.password, 3);
            return newUserData;
        }
    }
});

module.exports = User 

