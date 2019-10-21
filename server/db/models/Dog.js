const connection = require('../connection');
const { Sequelize } = connection;
const { UUID, UUIDV4, STRING, TEXT, BOOLEAN, DECIMAL, INTEGER } = Sequelize;

function greaterThanZero(field) {
  if (field <= 0) {
    throw new Error('field should be greater than 0');
  }
}

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
    type: TEXT
  },
  price: {
    type: DECIMAL,
    allowNull: false,
    validate: {
      greaterThanZero
    }
  },
  age: {
    type: INTEGER,
    allowNull: false,
    validate: {
      greaterThanZero
    }
  },
  imageURL: {
    type: STRING,
    validate: {
      isUrl: true
    }
  },
  isAvailable: {
    type: BOOLEAN,
    defaultValue: true
  }
});

Dog.findAllAvailable = function() {
  return this.findAll({ where: { isAvailable: true } });
};

module.exports = Dog;
