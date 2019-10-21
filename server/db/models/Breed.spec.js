const chai = require('chai');
chai.use(require('chai-as-promised'));
const { expect } = chai;

const db = require('../db');
const Breed = require('./Breed');

describe('Breed Model', () => {
  describe('name column', () => {
    it('should not be null', async () => {
      await expect(Breed.create()).to.be.rejectedWith(
        'notNull Violation: breed.name cannot be null'
      );
    });

    it('should not be an empty string', async () => {
      await expect(Breed.create({ name: '' })).to.be.rejectedWith(
        'Validation error: Validation notEmpty on name failed'
      );
    });

    it('should be uniqe', async () => {
      const goldenDoodle = { name: 'Golden Doodle' };
      await Breed.create(goldenDoodle);

      await expect(Breed.create(goldenDoodle)).to.be.rejectedWith(
        'Validation error'
      );
    });
  });
});
