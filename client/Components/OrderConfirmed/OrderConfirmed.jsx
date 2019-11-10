import React from 'react';
import { connect } from 'react-redux';
import './orderConfirmed.scss';
import priceTag from '../../assets/img/icon-price-tag.svg';

const OrderConfirmed = ({ order, total }) => {
  console.log({order})
  return (
    <div id="order-container">
      {order && (
        <div id="order-content">
          <h2>Order has been placed!</h2>
          <span>Our agent will contact you within 24 hours to schedule house inspection and payment details!</span>
          <span>For questions or concerns, please contact hello@fullstackacademy.com</span>
          <div id="order-items-container">
            <div id="total-price">
              <span style={{marginRight: '0.5em'}}>TOTAL:</span>
              <img src={priceTag} />
              <span>${total}</span>
            </div>
            {order.orderItems.map(orderItem => (
              <div className="order-items" key={orderItem.id}>
                <div className="frame">
                  <img src={orderItem.dog.imageURL} />
                </div>
                <h3>{orderItem.dog.name}</h3>
                <span>${orderItem.price}</span>
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
  const order = orders.find(o => o.id === orderId)
  return {
    order,
    total: order.orderItems.reduce((acc, item) => acc + parseFloat(item.price), 0)
  };
};

export default connect(mapStateToProps)(OrderConfirmed);
