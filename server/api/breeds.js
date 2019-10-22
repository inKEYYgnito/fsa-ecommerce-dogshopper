const router = require('express').Router();

const { Breed } = require('./../db/db').models;

router.get('/', (req, res, next) => {
  Breed.findAll({ order: ['name'] })
    .then(breeds => res.send(breeds))
    .catch(next);
});

module.exports = router;
