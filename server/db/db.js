const connection = require('./connection');
const User = require('./models/User');
const Address = require('./models/Address');
const Breed = require('./models/Breed');
const Dog = require('./models/Dog');
const Order = require('./models/Order');
const OrderItem = require('./models/OrderItem');

Address.hasOne(User);
Dog.belongsTo(Breed, { foreignKey: { allowNull: false } });
Order.belongsTo(User);
OrderItem.belongsTo(Order, { foreignKey: { allowNull: false } });
OrderItem.belongsTo(Dog, { foreignKey: { allowNull: false } });

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
    Order,
    OrderItem
  }
};
