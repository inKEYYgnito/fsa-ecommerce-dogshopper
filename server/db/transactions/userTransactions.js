const connection = require('./../connection');
const User = require('./../models/User');
const Address = require('./../models/Address');

const updateAddress = ({ user, address }) =>
  connection.transaction(async transaction => {
    const { addressId } = user;
    if (addressId) {
      const origAddress = await Address.findByPk(addressId);
      await origAddress.update(address, { transaction });
    } else {
      const newAddress = await Address.create(address, { transaction });
      const userDetails = await User.findByPk(user.id);
      await userDetails.update({ addressId: newAddress.id }, { transaction });
    }
  });

module.exports = { updateAddress };
