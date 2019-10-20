import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ROUTE_PATH } from '../../commons/constants'
import dogLogo from '../../assets/img/logo-shoppadog.png'
import './header.scss'

class Header extends Component {
  render() {
    const { user } = this.props
    return (
      <header>
        
        <h1>SHOPPA DOG!</h1>
        <img id="header-logo" src={dogLogo}/>
        {user.name && (
          <>
            <span>Hi, {user.name}!</span>
            <NavLink to={ ROUTE_PATH.USER_PROFILE }>My Account</NavLink>
            <NavLink to={ ROUTE_PATH.USER_ORDERS }>Order History</NavLink>
            <a href="/api/auth/logout">Logout</a>
          </>
        )
        }
        {!user.name && (
          <>
            <a href="/api/auth/google">Login with GOOGLE+</a>
          </>
        )
        }
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

