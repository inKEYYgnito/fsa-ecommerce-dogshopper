require('dotenv').config();

const fs = require('fs');
const path = require('path');

const connection = require('./../connection');
const Dog = require('./../models/Dog');

const SEED_DATA_FOLDER = path.resolve('./server/db/seed/data');

const createModelData = (list, Model) => {
  return Promise.all(list.map(el => Model.create(el)));
};

const getSeedFiles = () => {
  return fs.readdirSync(SEED_DATA_FOLDER);
};

const getSeedFileData = file => {
  const jsonData = fs.readFileSync(path.join(SEED_DATA_FOLDER, file));
  return JSON.parse(jsonData);
};

const seed = async () => {
  await connection.sync({ force: true });

  const seedFiles = getSeedFiles();
  seedFiles.forEach(file => {
    const seedData = getSeedFileData(file);
    createModelData(seedData, Dog);
  });
};

seed();
