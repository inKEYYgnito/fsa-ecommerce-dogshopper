const connection = require('../connection');
const { Sequelize } = connection;
const { UUID, UUIDV4, STRING, TEXT, BOOLEAN, DECIMAL } = Sequelize;

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
    validate: {
      greaterThanZero(price) {
        if (price <= 0) {
          throw new Error('price should be greater than 0');
        }
      }
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
