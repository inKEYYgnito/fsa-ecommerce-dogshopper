const router = require('express').Router();

const { Dog } = require('./../db/db').models;

router.get('/', (req, res, next) => {
  Dog.findAll()
    .then(dogs => res.send(dogs))
    .catch(next);
});

module.exports = router;
