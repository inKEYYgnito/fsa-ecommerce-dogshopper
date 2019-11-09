import React from 'react';
import { connect } from 'react-redux';
import './orderConfirmed.scss';

const OrderConfirmed = ({ order }) => {
  return (
    <div id="order-container">
      {order && (
          <div id="order-content">
            <h2>Order has been placed!</h2>
            <span>Our agent will contact you within 24 hours to schedule house inspection and payment details!</span>
            <span>For questions or concerns, please contact hello@fullstackacademy.com</span>
            {order.orderItems.map(orderItem => (
              <div className="order-items" key={orderItem.id}>
                <div className="frame">
                  <img src={orderItem.dog.imageURL} />
                </div>
                <h3>{orderItem.dog.name}</h3>
                <span>${orderItem.price}</span>
              </div>
            ))}
            <p>Order ID: {order.id}</p>
          </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ orders }, { match }) => {
  const orderId = match.params.id;
  console.log({orders, match})
  return {
    order: orders.find(order => order.id === orderId)
  };
};

export default connect(mapStateToProps)(OrderConfirmed);
