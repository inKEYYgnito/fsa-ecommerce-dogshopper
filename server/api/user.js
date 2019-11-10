const router = require('express').Router();

const db = require('./../db/db');
const { updateAddress } = db.transactions;
const { User, Address } = db.models;

router.get('/', (req, res) => {
  res.send(req.user);
});

router.put('/', (req, res, next) => {
  if (req.user) {
    const user = req.user;
    const address = req.body;
    updateAddress({ user, address })
      .then(() => User.findByPk(user.id, { include: [{ model: Address }] }))
      .then(user => res.send(user))
      .catch(next);
  }
});

module.exports = router;
