import React, { Component } from 'react'

class OAuth extends Component {
  render() {
    const { user } = this.props
    return (
      <>
        {loggedIn && (<h1>Welcome! You are logged in.</h1>)}
        {!loggedIn && (<h1>You are logged out. Please login below.</h1>)}
        <a href="/api/auth/google">LOGIN with GOOGLE+</a>
        <br />
        <a href="/api/auth/logout">LOGOUT</a>
      </>
    )
  }
}

export default OAuth

