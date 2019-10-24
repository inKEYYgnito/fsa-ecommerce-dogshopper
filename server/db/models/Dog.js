const Breed = require('./Breed');
const connection = require('../connection');
const { Sequelize } = connection;
const {
  UUID,
  UUIDV4,
  STRING,
  TEXT,
  BOOLEAN,
  DECIMAL,
  INTEGER,
  ENUM
} = Sequelize;

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
    }
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
  ageUnit: {
    type: ENUM,
    allowNull: false,
    values: ['week', 'month', 'year']
  },
  gender: {
    type: ENUM,
    allowNull: false,
    values: ['M', 'F']
  },
  size: {
    type: ENUM,
    allowNull: false,
    values: ['S', 'M', 'L', 'XL']
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
  return this.findAll({
    where: { isAvailable: true },
    include: [{ model: Breed }]
  });
};

module.exports = Dog;
