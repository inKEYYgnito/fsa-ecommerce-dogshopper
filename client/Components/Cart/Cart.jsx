import React from 'react';
import { connect } from 'react-redux';
import priceTag from '../../assets/img/icon-price-tag.svg';
import './cart.scss';

const Cart = ({ crate }) => {
  console.log('crate', crate);
  return (
    <div id="cart-container">
      {crate.length ? (
        <>
          <h1>Here are your orders.</h1>
        </>
      ) : (
        <>
          <h1>Don't see your items? Sign in.</h1>
          <h6>There are no items in your create.</h6>
        </>
      )}
    </div>
  );
};

const mapStateToProps = ({ crate }) => {
  return {
    crate
  };
};

export default connect(mapStateToProps)(Cart);
