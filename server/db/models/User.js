const connection = require('../connection')
const { Sequelize } = connection
const { UUID, UUIDV4, STRING, INTEGER } = Sequelize

module.exports = connection.define('user', {
    id: {
        type: UUID,
        primaryKey: true,
        defaultValue: UUIDV4
    },
    name: {
        type: STRING,
        allowNull: false
    },
    email: {
        type: STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    googleId: {
        type: STRING,
        unique: true
    },
    addressId: {
        type: INTEGER
    }
})
