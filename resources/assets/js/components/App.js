import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DocumentContainer from './DocumentContainer';
import CommentsContainer from './CommentsContainer';

var documentsArr = [
    {
        index: 0,
        title: 'Hello',
        genre: 'novel',
        excerpt: 'Once there was a man with no face...'
    },
    {
        index: 1,
        title: 'Hello Book 2',
        genre: 'novel',
        excerpt: 'Once there was a man who got his face back...'
    }
]

export default class Example extends Component {
    constructor(props) {
        super(props);

        this.previewDocument = this.previewDocument.bind(this);
        this.state = {
            previewedDocument: '',
            selectedDocument: ''
        }
    }
    previewDocument(index) {
        
        this.setState({
            previewedDocument: index
        }, () => {
            console.log(this.state.previewedDocument);
        })
    }
    render() {
        return (
            <div>
                <div className='col-md-8 text-center documents' >
                    <DocumentContainer
                    documentsArr={documentsArr}
                    previewDocument={this.previewDocument}
                     />
                </div>
                <div className='col-md-4 text-center comments' >
                    <CommentsContainer
                    previewedDocument={documentsArr[this.state.previewedDocument]}
                     />
                </div>
            </div>
        );
    }
}

if (document.getElementById('react')) {
    ReactDOM.render(<Example />, document.getElementById('react'));
}
