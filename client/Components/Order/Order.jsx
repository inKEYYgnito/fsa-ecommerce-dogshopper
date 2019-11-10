import React from 'react';
import { connect } from 'react-redux';

import './order.scss';
import priceTag from '../../assets/img/icon-price-tag.svg';

const Order = ({ order, total, confirm }) => {
  return (
    <div id="order-container">
      {order && (
        <div id="order-content">
          {confirm && (
            <>
              <h2>Your order has been placed.</h2>
              <span>
                Thank you for giving these pups a chance! Our agent will contact
                you at the provided email (<b>{order.email}</b>) within 24 hours
                to schedule an interview, observed trial, and payment!
              </span>
            </>
          )}
          <span style={{ fontSize: '0.8em' }}>
            For questions or concerns, please contact hello@fullstackacademy.com
          </span>
          <div id="order-items-container">
            <div id="total-price">
              <span style={{ marginRight: '0.5em' }}>TOTAL:</span>
              <img src={priceTag} />
              <span>${total}</span>
            </div>
            {order.orderItems.map(orderItem => (
              <div className="order-items" key={orderItem.id}>
                <div className="frame">
                  <img src={orderItem.dog.imageURL} />
                </div>
                <span>{orderItem.dog.name}</span>
                <h2>${orderItem.price}</h2>
              </div>
            ))}
          </div>
          <p>Order ID: {order.id}</p>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ orders }, { match }) => {
  const orderId = match.params.id;
  const order = orders.find(o => o.id === orderId);
  return {
    order,
    total:
      order &&
      order.orderItems.reduce((acc, item) => acc + parseFloat(item.price), 0)
  };
};

export default connect(mapStateToProps)(Order);
