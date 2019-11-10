import React from 'react';
import { connect } from 'react-redux';

import './userProfile.scss';

const UserProfile = ({ user }) => {
  return (
    <div id="user-profile-container">
      <h1 className="page-title">User Profile</h1>
      <form id="checkout-form">
        <label>
          <h2>Email</h2>
          <input name="email" value={user.email} disabled />
        </label>
        <h2 style={{ marginTop: '1.2vw' }}>Delivery Address</h2>
        <label>
          <input name="street" placeholder="Street" title="Street" />
        </label>
        <label>
          <input name="city" placeholder="City" title="City" />
        </label>
        <label>
          <input name="state" placeholder="State" title="State" />
        </label>
        <label>
          <input name="country" placeholder="Country" title="Country" />
        </label>
        <label>
          <input name="zip" placeholder="Zip Code" title="Zip Code" />
        </label>
        <button type="submit" className="btn-controls">
          Checkout
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ user }) => {
  return {
    user
  };
};

export default connect(mapStateToProps)(UserProfile);
