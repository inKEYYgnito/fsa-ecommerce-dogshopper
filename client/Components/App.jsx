import React, { Component } from 'react'
import { connect } from 'react-redux'
import OAuth from './OAuth'

class App extends Component {
    render() {
        return (
            <>
                <OAuth />
            </>
        )
    }
}

const mapStateToProps = () => {}

export default connect(mapStateToProps)(App)
