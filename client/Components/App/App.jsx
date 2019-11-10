import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Cart from '../Cart/Cart';
import CrateCheckout from '../CrateCheckout/CrateCheckout';
import UserProfile from '../UserProfile/UserProfile';
import OrderHistory from '../OrderHistory/OrderHistory';
import OrderConfirmed from '../OrderConfirmed/OrderConfirmed';
import Dogs from '../Dogs/Dogs';
import Dog from '../Dog/Dog';
import {
  getBreeds,
  getDogs,
  getUser,
  getCrate,
  getOrders
} from '../../store/actions/actions';
import { ROUTE_PATH } from '../../commons/constants';
import './app.scss';

const {
  DOG,
  DOGS,
  CRATE,
  CRATE_CHECKOUT,
  USER_PROFILE,
  ORDERS,
  ORDER_CONFIRMED
} = ROUTE_PATH;

class App extends Component {
  componentDidMount() {
    this.props.getBreeds();
    this.props.getDogs();
    this.props.getUser();
    this.props.getCrate();
    this.props.getOrders();
  }
  render() {
    return (
      <HashRouter>
        <Header />
        <section>
          <Switch>
            <Route path={DOG} component={Dog} />
            <Route path={DOGS} component={Dogs} />
            <Route path={USER_PROFILE} component={UserProfile} />
            <Route exact path={ORDERS} component={OrderHistory} />
            <Route path={`${ORDER_CONFIRMED}/:id`} component={OrderConfirmed} />
            <Route
              path={CRATE_CHECKOUT}
              render={props => (
                <>
                  <Cart {...props} />
                  <CrateCheckout {...props} />
                </>
              )}
            />
            <Route path={CRATE} component={Cart} />
            <Redirect to={DOGS} />
          </Switch>
        </section>
      </HashRouter>
    );
  }
}

const mapDispatchToProps = {
  getBreeds,
  getDogs,
  getUser,
  getCrate,
  getOrders
};

export default connect(
  null,
  mapDispatchToProps
)(App);
