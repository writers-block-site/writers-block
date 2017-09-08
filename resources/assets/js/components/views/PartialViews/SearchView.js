import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import SearchDocuments from './components/SearchDocuments';

class SearchView extends Component {
    constructor(props){
        super(props);

        console.log(props);
    }
    componentWillMount() {
       
    }
    render() {
        return(
            <div>
                <SearchDocuments selectPost={this.props.selectPost} posts={this.props.posts} />
                <div className='test col-sm-4 text-center'>
                    <h2>(Preview to be added)</h2>
                </div>
            </div>
        )
    }
}

export default withRouter(SearchView);