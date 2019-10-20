import React, { Component } from 'react'
import { connect } from 'react-redux';

class OAuth extends Component {
  render() {
    const { user } = this.props
    return (
      <>
        {user.name && (
          <>
            <h1>Welcome, {user.name}! You are logged in.</h1>
            <a href="/api/auth/logout">LOGOUT</a>
          </>
        )
        }
        {!user.name && (
          <>
            <h1>You are logged out. Please login below.</h1>
            <a href="/api/auth/google">LOGIN with GOOGLE+</a>
          </>
        )
        }
      </>
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
)(OAuth)

