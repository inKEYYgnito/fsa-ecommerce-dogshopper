import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { ROUTE_PATH } from '../../commons/constants'
import dogLogo from '../../assets/img/logo-shoppadog.png'
import dogCrate from '../../assets/img/icon-dogcrate.png'
import './header.scss'

class Header extends Component {
  render() {
    const { user } = this.props
    return (
      <header>
        <div id="logo">
          <Link to="/">SHOPPA DOG!</Link>
          <img src={dogLogo} />
        </div>
        <div id="user-access">
          <NavLink to={ROUTE_PATH.DOGS} exact>All Available Dogs</NavLink>
          {user.name && (
            <>
              <NavLink to={ROUTE_PATH.USER_PROFILE}>My Account</NavLink>
              <NavLink to={ROUTE_PATH.USER_ORDERS}>Order History</NavLink>
              <a href="/api/auth/logout">Logout</a>
            </>
          )}
          {!user.name && <a href="/api/auth/google">Login with GOOGLE+</a>}
          <img src={dogCrate} />
        </div>
      </header>
    )
  }
}

const mapStateToProps = ({ user }) => {
  return {
    user
  }
}

export default connect(
  mapStateToProps
)(Header)

