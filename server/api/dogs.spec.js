const { expect } = require('chai');
const request = require('supertest');
const uuid = require('uuid');

const app = request(require('./../app'));
const db = require('./../db/db');
const { Breed, Dog } = db.models;

describe('Dog routes', () => {
  const katsuMedium = {
    id: uuid.v4(),
    name: 'Katsu Medium',
    price: 5000,
    age: 1,
    ageUnit: 'month',
    gender: 'F',
    size: 'M'
  };

  const katsuXL = {
    name: 'Katsu XL',
    price: 5000,
    age: 1,
    ageUnit: 'month',
    gender: 'F',
    size: 'XL'
  };

  const katsuNotAvailable = {
    name: 'Katsu Not Available',
    price: 5000,
    age: 1,
    ageUnit: 'month',
    gender: 'F',
    size: 'XL',
    isAvailable: false
  };

  beforeEach(async () => {
    const goldenDoodle = await Breed.create({ name: 'Golden Doodle' });

    katsuMedium.breedId = goldenDoodle.id;
    await Dog.create(katsuMedium);

    katsuXL.breedId = goldenDoodle.id;
    await Dog.create(katsuXL);

    katsuNotAvailable.breedId = goldenDoodle.id;
    await Dog.create(katsuNotAvailable);
  });

  describe('GET /api/dogs', () => {
    it('should return all available dogs in the database', () => {
      return app
        .get('/api/dogs')
        .expect(200)
        .then(response => expect(response.body.length).to.equal(2));
    });
  });

  describe('GET /api/dogs/:id', () => {
    it('should return all dogs in the database', () => {
      return app
        .get(`/api/dogs/${katsuMedium.id}`)
        .expect(200)
        .then(response => {
          expect(response.body.id).to.equal(katsuMedium.id);
        });
    });
  });
});
