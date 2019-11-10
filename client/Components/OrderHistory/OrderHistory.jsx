import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ROUTE_PATH } from '../../commons/constants';
import './orderHistory.scss';
import { Redirect } from 'react-router-dom';
import Moment from 'react-moment';

// to={`${ROUTE_PATH.ORDERS}/${order.id}`}

class OrderHistory extends Component {
  state = {
    redirectId: ''
  }
  handleOnClick = (id) => {
    this.setState({redirectId: id});
  }
  render() {
    const { redirectId } = this.state;
    if (redirectId) return <Redirect push to={`${ROUTE_PATH.ORDERS}/${redirectId}`} />

    const { orders } = this.props;
    return (
      <div id="order-history-container">
        <h1 className="page-title">Order History</h1>
        {orders.length ? (
          <div id="order-history-wrapper">
            <span id="help-contact">For questions or concerns, please contact hello@fullstackacademy.com</span>
            {orders.map(order => (
              <div
                key={order.id}
                className="order-history-items"
                onClick={() => this.handleOnClick(order.id)}>
                <span>Order No. <span className="value">{order.id}</span></span>
                <span>Ordered on <span className="value"><Moment format="MMM DD YYYY - hh:mm a" date={order.createdAt}/></span></span>
                <span>Dogs: <span className="value">{order.orderItems.length}</span></span>
                <span>Total: <span className="value">${order.orderItems.reduce((acc, item) => acc + parseFloat(item.price), 0)}</span></span>
              </div>
            ))}
          </div>
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
  }
}

const mapStateToProps = ({ orders }) => ({ orders });

export default connect(mapStateToProps)(OrderHistory);
