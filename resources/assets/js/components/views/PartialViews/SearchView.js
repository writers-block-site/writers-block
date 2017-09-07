import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import SearchDocuments from './components/SearchDocuments';

class SearchView extends Component {
    render() {
        return(
            <div>
                <SearchDocuments />
            </div>
        )
    }
}

export default withRouter(SearchView);