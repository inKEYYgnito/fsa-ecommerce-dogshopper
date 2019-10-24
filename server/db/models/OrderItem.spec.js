const uuid = require('uuid');
const chai = require('chai');
chai.use(require('chai-as-promised'));
const { expect } = chai;

const Breed = require('./Breed');
const Dog = require('./Dog');
const Order = require('./Order');
const OrderItem = require('./OrderItem');

describe('OrderItem Model', () => {
  let orderItem;

  beforeEach(async () => {
    const breed = await Breed.create({ name: 'Golden Doodle' });
    const dog = await Dog.create({
      name: 'Katsu',
      price: 5000,
      age: 1,
      ageUnit: 'month',
      gender: 'F',
      size: 'L',
      breedId: breed.id
    });
    const order = await Order.create({
      email: 'katsu@goldendoodle.com',
      status: 'cart'
    });

    orderItem = {
      price: 1000,
      orderId: order.id,
      dogId: dog.id
    };
  });

  describe('price column', () => {
    it('should not be null', async () => {
      delete orderItem.price;

      await expect(OrderItem.create(orderItem)).to.be.rejectedWith(
        'notNull Violation: order_item.price cannot be null'
      );
    });

    it('should be greater than 0', async () => {
      orderItem.price = -1;

      await expect(OrderItem.create(orderItem)).to.be.rejectedWith(
        'Validation error: field should be greater than 0'
      );
    });
  });

  describe('relationship to order', () => {
    it('should belong to an existing order', async () => {
      const nonExistentOrderId = uuid.v4();
      orderItem.orderId = nonExistentOrderId;

      await expect(OrderItem.create(orderItem)).to.be.rejectedWith(
        'insert or update on table "order_items" violates foreign key constraint "order_items_orderId_fkey"'
      );
    });

    it('should not be null', async () => {
      delete orderItem.orderId;

      await expect(OrderItem.create(orderItem)).to.be.rejectedWith(
        'notNull Violation: order_item.orderId cannot be null'
      );
    });
  });

  describe('relationship to dog', () => {
    it('should belong to an existing dog', async () => {
      const nonExistentDogId = uuid.v4();
      orderItem.dogId = nonExistentDogId;

      await expect(OrderItem.create(orderItem)).to.be.rejectedWith(
        'insert or update on table "order_items" violates foreign key constraint "order_items_dogId_fkey"'
      );
    });

    it('should not be null', async () => {
      delete orderItem.dogId;

      await expect(OrderItem.create(orderItem)).to.be.rejectedWith(
        'notNull Violation: order_item.dogId cannot be null'
      );
    });
  });
});
