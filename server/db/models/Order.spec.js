const mdescribe = require('mocha-repeat');

const uuid = require('uuid');
const chai = require('chai');
chai.use(require('chai-as-promised'));
const { expect } = chai;

const Order = require('./Order');

describe('Order Model', () => {
  let order;

  const addressFields = {
    street: 'street',
    city: 'city',
    state: 'state',
    country: 'country',
    zip: 'zip'
  };

  beforeEach(() => {
    order = {
      email: 'katsu@goldendoodle.com',
      street: '47 Dog Street',
      city: 'Brooklyn',
      state: 'NY',
      zip: '11201',
      country: 'USA'
    };
  });

  describe('status column', () => {
    it('should accept value cart', async () => {
      order.status = 'cart';

      await expect(Order.create(order)).to.be.fulfilled;
    });

    it('should accept value created', async () => {
      order.status = 'created';

      await expect(Order.create(order)).to.be.fulfilled;
    });

    it('should accept value processing', async () => {
      order.status = 'processing';

      await expect(Order.create(order)).to.be.fulfilled;
    });

    it('should accept value completed', async () => {
      order.status = 'completed';

      await expect(Order.create(order)).to.be.fulfilled;
    });

    it('should accept value cancelled', async () => {
      order.status = 'cancelled';

      await expect(Order.create(order)).to.be.fulfilled;
    });

    it('should only accept values cart, created, processing, completed, cancelled', async () => {
      order.status = 'in transit';

      await expect(Order.create(order)).to.be.rejectedWith(
        'invalid input value for enum enum_orders_status'
      );
    });

    it('should default to value created', async () => {
      const createdOrder = await Order.create(order);

      expect(createdOrder.status).to.equal('created');
    });
  });

  describe('email column', () => {
    it('should not be null', async () => {
      delete order.email;

      await expect(Order.create(order)).to.be.rejectedWith(
        'notNull Violation: order.email cannot be null'
      );
    });

    it('should be a valid email address', async () => {
      order.email = 'this is not a valid email';

      await expect(Order.create(order)).to.be.rejectedWith(
        'Validation error: Validation isEmail on email failed'
      );
    });
  });

  mdescribe('delivery address', addressFields, addressField => {
    describe('when status is cart', () => {
      it(`should not require ${addressField}`, async () => {
        order.status = 'cart';
        delete order[addressField];

        await expect(Order.create(order)).to.be.fulfilled;
      });
    });

    describe('when status is not cart', () => {
      it(`should require ${addressField}`, async () => {
        order.status = 'created';
        delete order[addressField];

        await expect(Order.create(order)).to.be.rejectedWith(
          'complete address required'
        );
      });
    });
  });

  describe('relationship to user', () => {
    it('should allow null', async () => {
      await expect(Order.create(order)).to.be.fulfilled;
    });

    describe('when relationship is not null', () => {
      it('should belong to an existing user', async () => {
        const nonExistentUserId = uuid.v4();
        order.userId = nonExistentUserId;

        await expect(Order.create(order)).to.be.rejectedWith(
          'insert or update on table "orders" violates foreign key constraint "orders_userId_fkey"'
        );
      });
    });
  });
});
