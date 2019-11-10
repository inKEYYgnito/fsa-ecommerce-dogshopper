import React from 'react';
import { connect } from 'react-redux';

import { updateUser } from '../../store/actions/actions';
import './userProfile.scss';

const UserProfile = ({ user, updateUser }) => {
  const onSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const address = {
      street: form.street.value,
      city: form.city.value,
      state: form.state.value,
      country: form.country.value,
      zip: form.zip.value
    };
    updateUser(address);
  };

  const address = user.address
    ? user.address
    : { street: '', city: '', state: '', country: '', zip: '' };

  return (
    <div id="user-profile-container">
      <h1 className="page-title">User Profile</h1>
      <form id="checkout-form" onSubmit={onSubmit}>
        <label>
          <h2>Email</h2>
          <input type="text" name="email" defaultValue={user.email} disabled />
        </label>
        <h2 style={{ marginTop: '1.2vw' }}>Delivery Address</h2>
        <label>
          <input
            type="text"
            name="street"
            placeholder="Street"
            defaultValue={address.street}
          />
        </label>
        <label>
          <input
            type="text"
            name="city"
            placeholder="City"
            defaultValue={address.city}
          />
        </label>
        <label>
          <input
            type="text"
            name="state"
            placeholder="State"
            defaultValue={address.state}
          />
        </label>
        <label>
          <input
            type="text"
            name="country"
            placeholder="Country"
            defaultValue={address.country}
          />
        </label>
        <label>
          <input
            type="text"
            name="zip"
            placeholder="Zip Code"
            defaultValue={address.zip}
          />
        </label>
        <button type="submit" className="btn-controls">
          Save
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = {
  updateUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
