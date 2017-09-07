import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import SearchView from './PartialViews/SearchView';

class DocView extends Component {
    render() {
        return(
            <Switch>
                <Route path='/docs' component={SearchView} />
            </Switch>
        )
    }
}

export default DocView;