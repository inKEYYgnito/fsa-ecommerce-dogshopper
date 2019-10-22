import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../Header/Header';
import Dogs from '../Dogs/Dogs';
import Dog from '../Dog/Dog';
import { getBreeds, getDogs, getUser } from '../../store/actions/actions';
import { ROUTE_PATH } from '../../commons/constants';
const { DOGS } = ROUTE_PATH;

class App extends Component {
  componentDidMount() {
    this.props.getBreeds();
    this.props.getDogs();
    this.props.getUser();
  }
  render() {
    return (
      <HashRouter>
        <Header />
        <Switch>
          <Route exact path={DOGS} component={Dogs} />
          <Route exact path={`${DOGS}/:id`} component={Dog} />
        </Switch>
      </HashRouter>
    );
  }
}

const mapDispatchToProps = {
  getBreeds,
  getDogs,
  getUser
};

export default connect(
  null,
  mapDispatchToProps
)(App);
