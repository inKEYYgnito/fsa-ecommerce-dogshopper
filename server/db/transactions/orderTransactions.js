const connection = require('./../connection');
const Dog = require('./../models/Dog');
const Order = require('./../models/Order');
const OrderItem = require('./../models/OrderItem');

const createOrder = ({ order, crate }) =>
  connection.transaction(async transaction => {
    const createdOrder = await Order.create(order, { transaction });

    for (let i = 0; i < crate.length; i++) {
      const dog = await Dog.findByPk(crate[i]);
      const orderItem = {
        orderId: createdOrder.id,
        dogId: dog.id,
        price: dog.price
      };
      await OrderItem.create(orderItem, { transaction });
      await dog.update({ isAvailable: false }, { transaction });
    }

    return createdOrder.id;
  });

module.exports = { createOrder };
