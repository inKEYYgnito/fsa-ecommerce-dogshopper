import React from 'react';
import { connect } from 'react-redux';

import './crateCheckout.scss';

const CrateCheckout = ({ crate }) => {
  return crate.length ? (
    <form id="checkout-form">
      <label>
        Email
        <input name="email" />
      </label>
      <p>Delivery Address</p>
      <label>
        Street
        <input name="street" />
      </label>
      <label>
        City
        <input name="city" />
      </label>
      <label>
        State
        <input name="state" />
      </label>
      <label>
        Country
        <input name="country" />
      </label>
      <label>
        Zip
        <input name="zip" />
      </label>
      <button>Confirm Checkout</button>
    </form>
  ) : (
    <></>
  );
};

const mapStateToProps = ({ crate }) => {
  return {
    crate
  };
};

export default connect(mapStateToProps)(CrateCheckout);
