import React from 'react';
import { connect } from 'react-redux';

import './orderHistory.scss';

const OrderHistory = ({ orders }) => {
  return (
    <div id="order-history-container">
      <h1 className="page-title">Order History</h1>
      <br />
      {orders.length ? (
        <>
          {orders.map(order => (
            <div key={order.id}>
              <p>Order ID: {order.id}</p>
              <p>Order Date: {order.createdAt}</p>
              <p>Items: {order.orderItems.length}</p>
              <p>
                Total:{' '}
                {order.orderItems.reduce(
                  (acc, item) => acc + parseFloat(item.price),
                  0
                )}
              </p>
            </div>
          ))}
        </>
      ) : (
        <>
          <h3>No orders yet.</h3>
          <span>
            Please visit all available dogs and create your first order.
          </span>
        </>
      )}
    </div>
  );
};

const mapStateToProps = ({ orders }) => ({ orders });

export default connect(mapStateToProps)(OrderHistory);
