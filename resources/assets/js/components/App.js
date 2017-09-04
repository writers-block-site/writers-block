import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DocumentContainer from './DocumentContainer';
import CommentsContainer from './CommentsContainer';

export default class Example extends Component {
    render() {
        return (
            <div>
                <div className='col-md-8 text-center documents' >
                    <DocumentContainer />
                </div>
                <div className='col-md-4 text-center comments' >
                    <CommentsContainer />
                </div>
            </div>
        );
    }
}

if (document.getElementById('react')) {
    ReactDOM.render(<Example />, document.getElementById('react'));
}
