const connection = require('./connection');
const User = require('./models/User');
const Address = require('./models/Address');

const modelCreator = (list, Model) => {
  return Promise.all(list.map(el => Model.create(el)));
};

const modelCreator2 = (list, Model) => {
  return Promise.all(list.map(el => Model.create(el)));
};

const modelCreator3 = (list, Model) => {
  return Promise.all(list.map(el => Model.create(el)));
};

const sync = async () => {
  Address.hasOne(User);

  await connection.sync({ force: true });
};

module.exports = {
  sync,
  models: {
    User,
    Address
  }
};
