const chai = require('chai');
chai.use(require('chai-as-promised'));
const { expect } = chai;

const db = require('../db');
const Dog = require('./Dog');

describe('Dog Model', () => {
  let katsu;

  beforeEach(async () => {
    katsu = { name: 'Katsu', price: 5000, age: 1 };

    await db.sync(true);
  });

  describe('name column', () => {
    it('should not be null', async () => {
      await expect(Dog.create()).to.be.rejectedWith(
        'notNull Violation: dog.name cannot be null'
      );
    });

    it('should not be an empty string', async () => {
      katsu.name = '';

      await expect(Dog.create(katsu)).to.be.rejectedWith(
        'Validation error: Validation notEmpty on name failed'
      );
    });

    it('should be uniqe', async () => {
      await Dog.create(katsu);

      await expect(Dog.create(katsu)).to.be.rejectedWith('Validation error');
    });
  });

  describe('price column', () => {
    it('should not be null', async () => {
      delete katsu.price;

      await expect(Dog.create(katsu)).to.be.rejectedWith(
        'notNull Violation: dog.price cannot be null'
      );
    });

    it('should be greater than 0', async () => {
      katsu.price = 0;

      await expect(Dog.create(katsu)).to.be.rejectedWith(
        'Validation error: price should be greater than 0'
      );
    });
  });

  describe('age column', () => {
    it('should not be null', async () => {
      delete katsu.age;

      await expect(Dog.create(katsu)).to.be.rejectedWith(
        'notNull Violation: dog.age cannot be null'
      );
    });
  });

  describe('isAvailable column', () => {
    it('should default to true', async () => {
      const dog = await Dog.create(katsu);

      expect(dog.isAvailable).to.equal(true);
    });
  });
});
