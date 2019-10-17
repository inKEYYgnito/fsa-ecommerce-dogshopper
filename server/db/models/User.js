const connection = require('../connection')
const { Sequelize } = connection
const { UUID, UUIDV4, STRING, INTEGER } = Sequelize

module.exports = connection.define('user', {
    id: {
        type: UUID,
        primaryKey: true,
        defaultValue: UUIDV4
    },
    googleId: {
        type: STRING,
        unique: true
    },
    email: {
        type: STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    addressId: {
        type: INTEGER
    }
})
