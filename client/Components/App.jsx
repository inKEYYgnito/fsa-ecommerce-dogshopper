import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import Dogs from './Dogs'
import { actions } from '../store/index'
const { getDogs_ } = actions;

const Hi =()=> {
    return(
        <h1>hi</h1>
    )
}


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
                <Route exact path ='/' component = {Hi}/>
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
