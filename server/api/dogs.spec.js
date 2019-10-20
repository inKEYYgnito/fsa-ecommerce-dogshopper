require('./../../util/spec_helper');

const { expect } = require('chai');
const request = require('supertest');
const uuid = require('uuid');

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

  describe('GET /api/dogs/:id', () => {
    const katsu = {
      id: uuid.v4(),
      name: 'Katsu 1',
      price: 1000
    };

    beforeEach(async () => {
      await Dog.create(katsu);
    });

    it('should return all dogs in the database', () => {
      return app
        .get(`/api/dogs/${katsu.id}`)
        .expect(200)
        .then(response => {
          expect(response.body.id).to.equal(katsu.id);
        });
    });
  });
});
