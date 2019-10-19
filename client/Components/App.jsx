import React, { Component } from 'react'
import { connect } from 'react-redux'
import OAuth from './OAuth'

class App extends Component {
    componentDidMount() {
        // this.props.getUser()
    }
    render() {
        return (
            <>
                <OAuth />
            </>
        )
    }
}

const mapDispatchToProps = () => {
    return {}
}

export default connect(null)(App)
