require('./../../util/spec_helper');

const { expect } = require('chai');
const request = require('supertest');
const app = request(require('./../app'));
const db = require('./../db/db');
const { Dog } = db.models;

describe('Dog routes', () => {
  beforeEach(async () => {
    await db.sync();
  });

  describe('GET /api/dogs', () => {
    before(async () => {
      await Dog.create({ name: 'Katsu 1', price: 1000 });
      await Dog.create({ name: 'Katsu 2', price: 2500 });
      await Dog.create({ name: 'Katsu 3', price: 3750 });
    });

    it('should return all dogs in the database', () => {
      return app
        .get('/api/dogs')
        .expect(200)
        .then(response => expect(response.body.length).to.equal(3));
    });
  });
});
