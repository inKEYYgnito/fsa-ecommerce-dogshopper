import React from 'react';
import { connect } from 'react-redux';

import priceTag from '../../assets/img/icon-price-tag.svg';
import './orderConfirmed.scss';

const OrderConfirmed = ({ order }) => {
  return (
    <div id="cart-container">
      {order && (
        <>
          <h1 className="page-title">Order Summary</h1>
          <h3> Order #: {order.id}</h3>
          {order.orderItems.map(orderItem => (
            <div className="cart-dogs" key={orderItem.id}>
              <div className="polaroid">
                <img className="dog-pic" src={orderItem.dog.imageURL} />
              </div>
              <h3>{orderItem.dog.name}</h3>
              <img src={priceTag} />
              <span>{orderItem.price}</span>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

const mapStateToProps = ({ orders }, { match }) => {
  const orderId = match.params.id;
  return {
    order: orders.find(order => order.id === orderId)
  };
};

export default connect(mapStateToProps)(OrderConfirmed);
