const uuid = require('uuid');
const { expect } = require('chai');
const request = require('supertest');
const app = request(require('./../app'));

const db = require('./../db/db');
const { Breed, Dog } = db.models;

describe('Order routes', () => {
  let order;
  let crate;

  beforeEach(async () => {
    order = {
      email: 'katsu@goldendoodle.com',
      street: '47 Dog Street',
      city: 'Brooklyn',
      state: 'NY',
      zip: '11201',
      country: 'USA'
    };

    const goldenDoodle = await Breed.create({ name: 'Golden Doodle' });
    const katsu = {
      name: 'Katsu',
      price: 5000,
      age: 1,
      ageUnit: 'month',
      gender: 'F',
      size: 'M',
      breedId: goldenDoodle.id
    };

    const katsu1 = await Dog.create({ ...katsu, id: uuid.v4() });
    const katsu2 = await Dog.create({ ...katsu, id: uuid.v4() });

    crate = [katsu1.id, katsu2.id];
  });

  describe('POST /api/orders', () => {
    it('should return created order with associated order items', () => {
      return app
        .post('/api/orders')
        .send({ order, crate })
        .expect(201)
        .then(response => {
          const createdOrder = response.body;
          expect(createdOrder.status).to.equal('created');
          expect(createdOrder.order_items.length).to.equal(2);
        });
    });

    it('should update ordered dog to unavailable', () => {});

    describe('when order was not created', () => {
      it('should not create order items', () => {});
    });

    describe('when there is a logged in user', () => {
      it('should associate the userId to the order', () => {});
    });
  });
});
