const connection = require('../connection');
const { Sequelize } = connection;
const { UUID, UUIDV4, STRING, TEXT, BOOLEAN } = Sequelize;

const Dog = connection.define('dog', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
    unique: true
  },
  description: {
    type: TEXT,
    allowNull: false,
    unique: true
  },
  price: {
    type: STRING,
    validate: {
      isDecimal: true,
      min: 0.0
    }
  },
  imageURL: {
    type: STRING,
    validate: {
      isUrl: true
    }
  },
  isAvailable: {
    type: BOOLEAN
  }
});

module.exports = Dog;
