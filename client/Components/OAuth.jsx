import React, { Component } from 'react'

class OAuth extends Component {
  state = {}
  render() {
    const loggedIn = false
    return (
      <React.Fragment>
        {loggedIn && (<h1>Welcome! You are logged in.</h1>)}
        {!loggedIn && (<h1>You are logged out. Please login below.</h1>)}
        <a href="/api/auth/google">LOGIN with GOOGLE+</a>
        <br />
        <a href="/api/auth/logout">LOGOUT</a>
      </React.Fragment>
    )
  }
}

export default OAuth

