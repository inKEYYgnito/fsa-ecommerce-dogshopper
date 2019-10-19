const connection = require('./connection');
const User = require('./models/User');
const Address = require('./models/Address');
const Dog = require('./models/Dog');

const modelCreator = (list, Model) => {
  return Promise.all(list.map(el => Model.create(el)));
};

const sync = async () => {
  Address.hasOne(User);

  await connection.sync({ force: true });

  const dogs = [
    {
      name: 'Katsu1',
      description: 'Katsu is a young and lively pup who loves peanut butter',
      price: 14.99,
      imageURL:
        'https://www.swissridgekennels.com/wp-content/uploads/gigi-8.jpg',
      isAvailable: true
    },
    {
      name: 'Katsu2',
      description: 'This pup will make u smile',
      price: 15.99,
      imageURL:
        'https://www.swissridgekennels.com/wp-content/uploads/cedar-3-236x300.jpg',
      isAvailable: true
    },
    {
      name: 'Katsu3',
      description: 'Great pupster',
      price: 13.99,
      imageURL:
        'https://www.allthingsdogs.com/wp-content/uploads/2019/05/Apricot-Color-Teacup-Poodle.jpg',
      isAvailable: true
    }
  ];

  await modelCreator(dogs, Dog);
};

module.exports = {
  sync,
  models: {
    User,
    Address,
    Dog
  }
};
