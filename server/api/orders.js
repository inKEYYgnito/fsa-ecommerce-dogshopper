const router = require('express').Router();

const db = require('./../db/db');
const { createOrder } = db.transactions;
const { Order, OrderItem } = db.models;

router.post('/', async (req, res, next) => {
  createOrder(req.body)
    .then(orderId =>
      Order.findByPk(orderId, {
        include: [{ model: OrderItem }]
      })
    )
    .then(order => res.status(201).send(order))
    .catch(next);
});

module.exports = router;
