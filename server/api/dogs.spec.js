require('./../../util/spec_helper');

const { expect } = require('chai');
const request = require('supertest');
const app = request(require('./../app'));
const db = require('./../db/db');
const { Dog } = db.models;

describe('Dog routes', () => {
  beforeEach(async () => {
    await db.sync(true);
  });

  describe('GET /api/dogs', () => {
    beforeEach(async () => {
      await Dog.create({ name: 'Katsu 1', price: 1000 });
      await Dog.create({ name: 'Katsu 2', price: 2500 });
      await Dog.create({ name: 'Katsu 3', price: 3750 });
      await Dog.create({
        name: 'Katsu Not Available',
        price: 4000,
        isAvailable: false
      });
    });

    it('should return all available dogs in the database', () => {
      return app
        .get('/api/dogs')
        .expect(200)
        .then(response => expect(response.body.length).to.equal(3));
    });
  });
});
