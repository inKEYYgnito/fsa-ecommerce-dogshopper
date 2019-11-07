import React from 'react';
import { connect } from 'react-redux';
import './orderConfirmed.scss';

const OrderConfirmed = ({ order }) => {
  return (
    <div id="order-container">
      <h1 className="page-title">Order Summary</h1>
      {order && (
        <>
          <div id="order-content">
            <h3> Order #: {order.id}</h3>
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
