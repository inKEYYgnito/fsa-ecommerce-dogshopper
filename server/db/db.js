const connection = require('./connection');
const seed = require('./seed/seed');
const User = require('./models/User');
const Address = require('./models/Address');
const Dog = require('./models/Dog');

Address.hasOne(User);

const sync = async () => {
  await connection.sync({ force: true });
  await seed();
};

module.exports = {
  sync,
  models: {
    User,
    Address,
    Dog
  }
};
