const router = require('express').Router();

const db = require('./../db/db');
const { createOrder } = db.transactions;
const { Dog, Order, OrderItem } = db.models;

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
