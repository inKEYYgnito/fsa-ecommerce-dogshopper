const chai = require('chai');
chai.use(require('chai-as-promised'));
const { expect } = chai;

const db = require('../db');
const Dog = require('./Dog');

describe('Dog Model', () => {
  let katsu;

  beforeEach(async () => {
    katsu = {
      name: 'Katsu',
      price: 5000,
      age: 1,
      ageUnit: 'month',
      gender: 'F',
      size: 'L'
    };

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
        'Validation error: field should be greater than 0'
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

    it('should be greater than 0', async () => {
      katsu.age = 0;

      await expect(Dog.create(katsu)).to.be.rejectedWith(
        'Validation error: field should be greater than 0'
      );
    });
  });

  describe('ageUnit column', () => {
    it('should not be null', async () => {
      delete katsu.ageUnit;

      await expect(Dog.create(katsu)).to.be.rejectedWith(
        'notNull Violation: dog.ageUnit cannot be null'
      );
    });

    it('should accept value week', async () => {
      katsu.ageUnit = 'week';

      await expect(Dog.create(katsu)).to.be.fulfilled;
    });

    it('should accept value month', async () => {
      katsu.ageUnit = 'month';

      await expect(Dog.create(katsu)).to.be.fulfilled;
    });

    it('should accept value year', async () => {
      katsu.ageUnit = 'year';

      await expect(Dog.create(katsu)).to.be.fulfilled;
    });

    it('should only accept values week, month or year', async () => {
      katsu.ageUnit = 'day';

      await expect(Dog.create(katsu)).to.be.rejectedWith(
        'invalid input value for enum "enum_dogs_ageUnit"'
      );
    });
  });

  describe('gender column', () => {
    it('should not be null', async () => {
      delete katsu.gender;

      await expect(Dog.create(katsu)).to.be.rejectedWith(
        'notNull Violation: dog.gender cannot be null'
      );
    });

    it('should accept value M', async () => {
      katsu.gender = 'M';

      await expect(Dog.create(katsu)).to.be.fulfilled;
    });

    it('should accept value F', async () => {
      katsu.gender = 'F';

      await expect(Dog.create(katsu)).to.be.fulfilled;
    });

    it('should only accept values M or F', async () => {
      katsu.gender = 'X';

      await expect(Dog.create(katsu)).to.be.rejectedWith(
        'invalid input value for enum enum_dogs_gender'
      );
    });
  });

  describe('size column', () => {
    it('should not be null', async () => {
      delete katsu.size;

      await expect(Dog.create(katsu)).to.be.rejectedWith(
        'notNull Violation: dog.size cannot be null'
      );
    });

    it('should accept value S', async () => {
      katsu.size = 'S';

      await expect(Dog.create(katsu)).to.be.fulfilled;
    });

    it('should accept value M', async () => {
      katsu.size = 'M';

      await expect(Dog.create(katsu)).to.be.fulfilled;
    });

    it('should accept value L', async () => {
      katsu.size = 'L';

      await expect(Dog.create(katsu)).to.be.fulfilled;
    });

    it('should accept value XL', async () => {
      katsu.size = 'XL';

      await expect(Dog.create(katsu)).to.be.fulfilled;
    });

    it('should only accept value S, M, L or XL', async () => {
      katsu.size = 'X';

      await expect(Dog.create(katsu)).to.be.rejectedWith(
        'invalid input value for enum enum_dogs_size'
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
