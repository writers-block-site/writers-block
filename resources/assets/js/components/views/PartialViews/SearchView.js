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
            <div className='container'>
                <SearchDocuments getPosts={this.props.getPosts} selectPost={this.props.selectPost} posts={this.props.posts} />
            </div>
        )
    }
}

export default withRouter(SearchView);