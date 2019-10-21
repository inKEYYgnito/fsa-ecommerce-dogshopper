const connection = require('../connection');
const { Sequelize } = connection;
const { STRING } = Sequelize;

const Breed = connection.define('breed', {
  name: {
    type: STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true
    }
  }
});

module.exports = Breed;
