import React from 'react';
import { connect } from 'react-redux';

const OrderConfirmed = ({ order }) => {
  return <div>order: {order.id}</div>;
};

const mapStateToProps = ({ orders }, { match }) => {
  const orderId = match.params.id;
  return {
    order: orders.find(order => order.id === orderId)
  };
};

export default connect(mapStateToProps)(OrderConfirmed);
