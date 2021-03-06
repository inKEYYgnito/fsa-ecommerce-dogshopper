const router = require('express').Router();

const { Dog } = require('./../db/db').models;

router.get('/', (req, res, next) => {
  Dog.findAllAvailable()
    .then(dogs => res.send(dogs))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  Dog.findByPk(req.params.id)
    .then(dog => res.send(dog))
    .catch(next);
});

module.exports = router;
