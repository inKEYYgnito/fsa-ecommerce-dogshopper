const chai = require('chai');
chai.use(require('chai-as-promised'));
const { expect } = chai;

const db = require('../db');
const Dog = require('./Dog');

describe('Dog Model', () => {
  beforeEach(async () => {
    await db.sync();
  });

  describe('name column', () => {
    it('should not be null', async () => {
      await expect(Dog.create()).to.be.rejectedWith(
        'notNull Violation: dog.name cannot be null'
      );
    });

    it('should not be an empty string', async () => {
      await expect(Dog.create({ name: '' })).to.be.rejectedWith(
        'Validation error: Validation notEmpty on name failed'
      );
    });

    it('should be uniqe', async () => {
      const katsu = { name: 'Katsu' };
      await Dog.create(katsu);

      await expect(Dog.create(katsu)).to.be.rejectedWith('Validation error');
    });
  });

  describe('price column', () => {
    it('should be greater than 0', async () => {
      const katsu = { name: 'Katsu', price: 0 };

      await expect(Dog.create(katsu)).to.be.rejectedWith(
        'Validation error: price should be greater than 0'
      );
    });
  });

  describe('isAvailable column', () => {
    it('should default to true', async () => {
      const katsu = { name: 'Katsu', price: 5000 };

      const dog = await Dog.create(katsu);

      expect(dog.isAvailable).to.equal(true);
    });
  });
});
