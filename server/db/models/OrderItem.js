const connection = require('../connection');
const { Sequelize } = connection;
const { UUID, DECIMAL } = Sequelize;

const { greaterThanZero } = require('./util/model_helper');

const OrderItem = connection.define('order_item', {
  price: {
    type: DECIMAL,
    allowNull: false,
    validate: {
      greaterThanZero
    }
  }
});

module.exports = OrderItem;
