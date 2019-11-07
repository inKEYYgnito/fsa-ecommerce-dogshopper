import React from 'react';
import { connect } from 'react-redux';

import { checkoutCrate } from '../../store/actions/actions';
import './crateCheckout.scss';

const CrateCheckout = ({ crate, checkoutCrate, history }) => {
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
    checkoutCrate({ order, crate, history });
  };

  return (
    <div id="crate-checkout-container">
      <h1 className="page-title">Email and Billing Information</h1>
      <form id="checkout-form" onSubmit={onSubmit}>
        <label>
          <h2>Email</h2>
          <input name="email" placeholder="Email (ex. john.doe@gmail.com)" title="Email" />
        </label>
        <h2 style={{marginTop: '1.2vw'}}>Delivery Address</h2>
        <label>
          <input name="street" placeholder="Street" title="Street" />
        </label>
        <label>
          <input name="city" placeholder="City" title="City" />
        </label>
        <label>
          <input name="state" placeholder="State" title="State"/>
        </label>
        <label>
          <input name="country" placeholder="Country" title="Country"/>
        </label>
        <label>
          <input name="zip" placeholder="Zip Code" title="Zip Code"/>
        </label>
        <button type="submit" className="btn-controls">Checkout</button>
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
