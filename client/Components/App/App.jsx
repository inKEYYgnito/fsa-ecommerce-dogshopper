import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
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

const { DOGS, CRATE, CRATE_CHECKOUT } = ROUTE_PATH;

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
            <Route exact path={DOGS} component={Dogs} />
            <Route exact path={`${DOGS}/:id`} component={Dog} />
            <Route exact path={CRATE} component={Cart} />
            <Route exact path={CRATE_CHECKOUT} component={CrateCheckout} />
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
