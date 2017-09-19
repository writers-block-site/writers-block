import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Document from './iterators/Document'
import SearchForm from './SearchForm';
import Pagination from './Pagination';

class SearchDocuments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: 'Public Posts'
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
            return(
                <Document
                user={document.user}
                selectPost={this.props.selectPost}
                key={document.handles}
                id={document.id}
                genre={document.genre}
                title={document.title} />
            )
        })

        return (
            <div className='container documents'>
                <h1 className="text-center search-title">{this.state.message}</h1>
                <SearchForm
                    getPosts={this.props.getPosts} />
                <div className='row'>
                    {documents}
                </div>
                <div>
                <Pagination
                    changePage={this.props.changePage}
                    lastPage={this.props.lastPage}
                    currentPage={this.props.currentPage} />
                </div>
            </div>
        )
    }
}

export default withRouter(SearchDocuments);
