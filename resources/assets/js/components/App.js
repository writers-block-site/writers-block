import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import DocumentContainer from './DocumentContainer';
import CommentsContainer from './CommentsContainer';

var documentsArr = [
    {
        'index': 0,
        'title': 'Hello',
        'genre': 'novel',
        'handle': 'han4d24le',
        'excerpt': 'Once there was a man with no face...',
        'comments': [
            {
                'user': 'Anonymous',
                'date': '15 seconds ago',
                'content': 'Really great story! enjoyed it'
            },
        ]
    },
    {
        'index': 1,
        'title': 'Hello Book 2',
        'genre': 'novel',
        'handle': 'n0Than4d24le',
        'excerpt': 'Once there was a man who got his face back...',
        'comments': [
            {
                'user': 'Anonymous',
                'date': '15 seconds ago',
                'content': 'Really great story! enjoyed it'
            },
            {
                'user': 'Not Anonymous',
                'date': '35 seconds ago',
                'content': 'Really great story! enjoyed it'
            }
        ]
    }
]

export default class Example extends Component {
    constructor(props) {
        super(props);

        this.previewDocument = this.previewDocument.bind(this);
        this.selectDocument = this.selectDocument.bind(this);

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
    selectDocument(index) {
        console.log('Index is:', index);
        this.setState({
            selectedDocument: index
        });
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                <Route path='/docs'>
                    <div>
                        <div className='col-md-8 text-center documents' >
                            <DocumentContainer
                            selectDocument={this.selectDocument}
                            selectedDocument={documentsArr[this.state.selectedDocument]}
                            documentsArr={documentsArr}
                            previewDocument={this.previewDocument}
                            />
                        </div>
                        <div className='col-md-4 text-center comments' >
                            <CommentsContainer
                            selectedDocument={documentsArr[this.state.selectedDocument]}
                            previewedDocument={documentsArr[this.state.previewedDocument]}
                            />
                        </div>
                    </div>
                    </Route>
                </div>
            </BrowserRouter>
        );
    }
}

if (document.getElementById('react')) {
    ReactDOM.render(<Example />, document.getElementById('react'));
}
