import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import OAuth from './OAuth';
import Dogs from './Dogs';
import { getDogs, getUser } from './../store/actions/actions';
import { ROUTE_PATH } from './../commons/constants';
const { DOGS } = ROUTE_PATH;

class App extends Component {
  componentDidMount() {
    this.props.getDogs();
    this.props.getUser();
  }
  render() {
    return (
      <HashRouter>
        <OAuth />
        <Switch>
          <Route exact path={DOGS} component={Dogs} />
        </Switch>
      </HashRouter>
    );
  }
}

const mapDispatchToProps = {
  getDogs,
  getUser
};

export default connect(
  null,
  mapDispatchToProps
)(App);
