require('dotenv').config();

const fs = require('fs');
const path = require('path');

const db = require('./../db');
const { Breed, Dog } = db.models;

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
  await db.sync(true);

  SEED_DATA_FILES.forEach(async ({ model, file }) => {
    const seedData = getSeedFileData(file);
    await createModelData(seedData, model);
  });
};

seed();
