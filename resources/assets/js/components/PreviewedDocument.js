import React, {Component} from 'react';

export default class PreviewedDocument extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }

    render() {
        if (!this.props.previewedDocument) {
            return(
                <h1>Hover over a document to see a preview!</h1>
            );
        }
        return(
            <div>
                <h1>{this.props.previewedDocument.title}</h1>
            </div>
        );
    }
}