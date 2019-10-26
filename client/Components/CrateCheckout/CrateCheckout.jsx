import React from 'react';
import { connect } from 'react-redux';
import './crateCheckout.scss';

const CrateCheckout = ({ user }) => {
  return (
    <div id="crate-checkout-containter">
      <h1 className="page-title">Email and Billing Information</h1>
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
        <button>Checkout</button>
      </form>
    </div>
  )
};

const mapStateToProps = ({ crate }) => {
  return {
    crate
  };
};

export default connect(mapStateToProps)(CrateCheckout);
