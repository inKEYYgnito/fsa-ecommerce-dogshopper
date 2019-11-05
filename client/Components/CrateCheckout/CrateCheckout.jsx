import React from 'react';
import { connect } from 'react-redux';

import { checkoutCrate } from '../../store/actions/actions';
import './crateCheckout.scss';

const CrateCheckout = ({ crate, checkoutCrate }) => {
  const onSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const order = {
      email: form.email.value,
      street: form.street.value,
      city: form.city.value,
      state: form.state.value,
      country: form.country.value,
      zip: form.zip.value
    };
    checkoutCrate({ order, crate });
  };

  return (
    <div id="crate-checkout-containter">
      <h1 className="page-title">Email and Billing Information</h1>
      <form id="checkout-form" onSubmit={onSubmit}>
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
  );
};

const mapStateToProps = ({ crate }) => {
  return {
    crate
  };
};

const mapDispatchToProps = {
  checkoutCrate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CrateCheckout);
