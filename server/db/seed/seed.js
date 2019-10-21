require('dotenv').config();

const fs = require('fs');
const path = require('path');

const connection = require('./../connection');
const Breed = require('./../models/Breed');
const Dog = require('./../models/Dog');

const SEED_DATA_FOLDER = path.resolve('./server/db/seed/data');
const SEED_DATA_FILES = [
  { model: Dog, file: 'dogs.json' },
  { model: Breed, file: 'breeds.json' }
];

const createModelData = (list, Model) => {
  return Promise.all(list.map(el => Model.create(el)));
};

const getSeedFileData = file => {
  const jsonData = fs.readFileSync(path.join(SEED_DATA_FOLDER, file));
  return JSON.parse(jsonData);
};

const seed = async () => {
  await connection.sync({ force: true });

  SEED_DATA_FILES.forEach(async ({ model, file }) => {
    const seedData = getSeedFileData(file);
    await createModelData(seedData, model);
  });
};

seed();
