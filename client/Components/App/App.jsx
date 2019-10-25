import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Cart from '../Cart/Cart';
import CrateCheckout from '../CrateCheckout/CrateCheckout';
import Dogs from '../Dogs/Dogs';
import Dog from '../Dog/Dog';
import {
  getBreeds,
  getDogs,
  getUser,
  getCrate
} from '../../store/actions/actions';
import { ROUTE_PATH } from '../../commons/constants';
import './app.scss';

const { DOG, DOGS, CRATE, CRATE_CHECKOUT } = ROUTE_PATH;

class App extends Component {
  componentDidMount() {
    this.props.getBreeds();
    this.props.getDogs();
    this.props.getUser();
    this.props.getCrate();
  }
  render() {
    return (
      <HashRouter>
        <Header />
        <section>
          <Switch>
            <Route path={DOG} component={Dog} />
            <Route path={DOGS} component={Dogs} />
            <Route
              path={CRATE_CHECKOUT} render={() => (
                <>
                  <Cart />
                  <CrateCheckout />
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
  getCrate
};

export default connect(
  null,
  mapDispatchToProps
)(App);
