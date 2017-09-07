import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import SearchDocuments from './PartialViews/SearchDocuments'

class DocView extends Component {
    render() {
        return(
            <Switch>
                <Route path='/docs' component={SearchDocuments} />
            </Switch>
        )
    }
}

export default DocView;