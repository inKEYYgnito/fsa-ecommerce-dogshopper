const connection = require('./connection');
const User = require('./models/User');
const Address = require('./models/Address');
const Breed = require('./models/Breed');
const Dog = require('./models/Dog');
const Order = require('./models/Order');

Address.hasOne(User);
Dog.belongsTo(Breed, { foreignKey: { allowNull: false } });
Order.belongsTo(User);

const sync = async (force = false) => {
  await connection.sync({ force });
};

module.exports = {
  sync,
  models: {
    User,
    Address,
    Breed,
    Dog,
    Order
  }
};
