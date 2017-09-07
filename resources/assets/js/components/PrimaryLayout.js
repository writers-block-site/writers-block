import React, {Component} from 'react';
import {Route, withRouter, Switch} from 'react-router-dom';
import Landing from './views/Landing';
import Profile from './views/Profile';
import NotFound from './views/NotFound';
import DocView from './views/DocView';

class PrimaryLayout extends Component {
    render(){
        return(
            <div>
                <Switch>
                    <Route path='/' exact component={Landing} />
                    <Route path='/users/:user/profile' component={Profile} />
                    <Route path='/docs' component={DocView} />
                    <Route path='*' component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(PrimaryLayout);