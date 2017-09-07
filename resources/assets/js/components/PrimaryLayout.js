import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import Login from './auth/Login';
import Landing from './views/Landing';
import Profile from './views/Profile';

class PrimaryLayout extends Component {
    render(){
        return(
            <div>
                <Route path='/' exact component={Landing} />
                <Route path='/test' component={Login} />
                <Route path='/users/:user/profile' component={Profile} />
            </div>
        );
    }
}

export default withRouter(PrimaryLayout);