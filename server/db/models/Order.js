const connection = require('../connection');
const { Sequelize } = connection;

const { UUID, UUIDV4, STRING, ENUM } = Sequelize;

const Order = connection.define(
  'order',
  {
    id: {
      type: UUID,
      primaryKey: true,
      defaultValue: UUIDV4
    },
    status: {
      type: ENUM,
      values: ['cart', 'created', 'processing', 'completed', 'cancelled'],
      defaultValue: 'created'
    },
    email: {
      type: STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    street: {
      type: STRING
    },
    city: {
      type: STRING
    },
    state: {
      type: STRING
    },
    country: {
      type: STRING
    },
    zip: {
      type: STRING
    }
  },
  {
    validate: {
      shouldHaveAddressIfStatusNotCart() {
        if (this.status !== 'cart') {
          if (
            !this.street ||
            !this.city ||
            !this.state ||
            !this.country ||
            !this.zip
          ) {
            throw new Error('complete address required');
          }
        }
      }
    }
  }
);

module.exports = Order;
