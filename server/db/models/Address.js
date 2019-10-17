const connection = require('../connection')
const { Sequelize } = connection
const { INTEGER, STRING } = Sequelize

module.exports = connection.define('address', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    street: {
        type: STRING,
        allowNull: false
    },
    city: {
        type: STRING,
        allowNull: false
    },
    state: {
        type: STRING,
        allowNull: false
    },
    zip: {
        type: STRING,
        allowNull: false
    },
    country: {
        type: STRING,
        allowNull: false
    },
})
