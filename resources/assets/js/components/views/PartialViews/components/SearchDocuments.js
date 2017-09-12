import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Document from './iterators/Document'
import SearchForm from './SearchForm';

class SearchDocuments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: 'All Documents'
        }
    }
    render() {
        if (!this.props.posts){
            return(
                <div className='documents col-sm-8'>
                    <h1>Loading...</h1>
                </div>
            )
        }
        var documents = this.props.posts.map((document) => {
            // console.log(document);
            return(
                <Document
                selectPost={this.props.selectPost}
                key={document.handles}
                id={document.id}
                genre={document.genre}
                title={document.title} />
            )
        })

        return (
            <div className='documents'>
                <h1>{this.state.message}</h1>
                <SearchForm getPosts={this.props.getPosts} />
                <div className='container'>
                    {documents}
                </div>
            </div>
        )
    }
}

export default withRouter(SearchDocuments);