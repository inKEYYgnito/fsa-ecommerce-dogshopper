import OAuth from './OAuth'
import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import Dogs from './Dogs'
import { actions } from '../store/index'
const { getDogs_ } = actions;

class App extends Component {
    constructor(){
        super()
        this.state = {}
    }
    componentDidMount(){
        this.props.getDogs_()
    }
    render(){
        return (
           <HashRouter>
                <OAuth />
                <Switch>
                    <Route exact path='/dogs' component = {Dogs}/>
                </Switch>
                </HashRouter>
        )
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getDogs_: () => dispatch(actions.getDogs_())
//     }
// }

const mapDispatchToProps = {
    getDogs_
};
export default connect(null,mapDispatchToProps)(App)
