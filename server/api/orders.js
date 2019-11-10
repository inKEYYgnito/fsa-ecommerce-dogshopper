const router = require('express').Router();

const db = require('./../db/db');
const { createOrder } = db.transactions;
const { Dog, Order, OrderItem } = db.models;
const { Op } = require('./../db/connection').Sequelize;

router.get('/', async (req, res, next) => {
  Order.findAll({
    where: { status: { [Op.not]: 'cart' } },
    include: [{ model: OrderItem, include: [{ model: Dog }] }],
    order: [['createdAt', 'DESC']]
  })
    .then(orders => res.send(orders))
    .catch(next);
});

router.post('/', async (req, res, next) => {
  const { order, crate } = req.body;
  if (req.user) {
    order.userId = req.user.id;
  }
  createOrder({ order, crate })
    .then(orderId =>
      Order.findByPk(orderId, {
        include: [{ model: OrderItem, include: [{ model: Dog }] }]
      })
    )
    .then(order => res.status(201).send(order))
    .catch(next);
});

module.exports = router;
