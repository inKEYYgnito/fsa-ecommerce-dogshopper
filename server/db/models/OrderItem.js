const connection = require('../connection');
const { Sequelize } = connection;
const { DECIMAL } = Sequelize;

const { greaterThanZero } = require('./util/model_helper');

const OrderItem = connection.define('orderItem', {
  price: {
    type: DECIMAL,
    allowNull: false,
    validate: {
      greaterThanZero
    }
  }
});

module.exports = OrderItem;
