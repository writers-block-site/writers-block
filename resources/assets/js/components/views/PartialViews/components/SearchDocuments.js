import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Document from './iterators/Document'

class SearchDocuments extends Component {
    render() {
        if (!this.props.posts){
            return(
                <div className='documents col-sm-8'>
                    <h1>Loading...</h1>
                </div>
            )
        }
        var documents = this.props.posts.map((document) => {
            console.log(document);
            return(
                <Document
                key={document.handles}
                id={document.id}
                genre={document.genre}
                title={document.title} />
            )
        })

        return (
            <div className='documents col-sm-8'>
                <h1>Search Results:</h1>
                {documents}
            </div>
        )
    }
}

export default withRouter(SearchDocuments);