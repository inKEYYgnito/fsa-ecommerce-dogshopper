import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import OAuth from './OAuth';
import Dogs from './Dogs';
import { getDogs } from './../store/actions/actions';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.props.getDogs();
  }
  render() {
    return (
      <HashRouter>
        <OAuth />
        <Switch>
          <Route exact path="/dogs" component={Dogs} />
        </Switch>
      </HashRouter>
    );
  }
}

const mapDispatchToProps = {
  getDogs
};

export default connect(
  null,
  mapDispatchToProps
)(App);
