const connection = require('./connection');
const User = require('./models/User');
const Address = require('./models/Address');
const Dog = require('./models/Dog');

Address.hasOne(User);

const sync = async (force = false) => {
  await connection.sync({ force });
};

module.exports = {
  sync,
  models: {
    User,
    Address,
    Dog
  }
};
