import React, { Component } from 'react'
import { connect } from 'react-redux'
class App extends Component {
    constructor(){
        super()
        this.state = {  }
    }
    componentDidMount(){
        console.log('mounted')
    }
    render(){
        return <h1>Success! The app loaded.</h1>
    }
}

export default App
