import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import PrimaryLayout from './PrimaryLayout';

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

export default class App extends Component {
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
                <PrimaryLayout />
            </BrowserRouter>
        );
    }
}

if (document.getElementById('react')) {
    ReactDOM.render(<App />, document.getElementById('react'));
}
