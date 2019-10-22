const { expect } = require('chai');
const request = require('supertest');

const app = request(require('./../app'));
const { Breed } = require('./../db/db').models;

describe('Breed routes', () => {
  const POODLE = 'Poodle';
  const GOLDEN_RETRIEVER = 'Golden Retriever';
  const GOLDEN_DOODLE = 'Golden Doodle';

  beforeEach(async () => {
    const breedList = [POODLE, GOLDEN_RETRIEVER, GOLDEN_DOODLE];
    await Promise.all(
      breedList.map(async breed => await Breed.create({ name: breed }))
    );
  });

  describe('GET /api/breeds', () => {
    it('should return all breeds in the database', () => {
      return app
        .get('/api/breeds')
        .expect(200)
        .then(response => expect(response.body.length).to.equal(3));
    });

    it('should return breed names in alphabetical order', () => {
      return app
        .get('/api/breeds')
        .expect(200)
        .then(response => {
          const breeds = response.body.map(breed => breed.name);
          expect(breeds).to.eql([GOLDEN_DOODLE, GOLDEN_RETRIEVER, POODLE]);
        });
    });
  });
});
