import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import SearchView from './PartialViews/SearchView';
import SelectedDocView from './PartialViews/SelectedDocView';

class DocView extends Component {
    render() {
        return(
            <Switch>
                <Route path='/docs' component={SelectedDocView} />
                <Route path='/docs/:id/view' />
            </Switch>
        )
    }
}

export default DocView;