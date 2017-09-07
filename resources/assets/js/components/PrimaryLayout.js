import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import Login from './auth/Login';
import Landing from './views/Landing'

class PrimaryLayout extends Component {
    render(){
        return(
            <div>
                <Route path='/test' component={Login} />
                <Route path='/home' component={Landing} />
            </div>
        );
    }
}

export default withRouter(PrimaryLayout);