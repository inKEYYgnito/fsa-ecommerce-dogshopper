import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Dogs from '../Dogs/Dogs';
import Dog from '../Dog/Dog';
import { getDogs, getUser } from '../../store/actions/actions';
import { ROUTE_PATH } from '../../commons/constants';
import './app.scss'

const { DOGS } = ROUTE_PATH;

class App extends Component {
  componentDidMount() {
    this.props.getDogs();
    this.props.getUser();
  }
  render() {
    return (
      <HashRouter>
        <Header />
        <section>
          <Switch>
            <Route exact path={DOGS} component={Dogs} />
            <Route exact path={`${DOGS}/:id`} component={Dog} />
          </Switch>
        </section>
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
