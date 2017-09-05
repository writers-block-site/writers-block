import React, {Component} from 'react';

export default class PreviewedDocument extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }

    render() {
        if (!this.props.previewedDocument) {
            return(
                <h1>Hover over a result to see a preview!</h1>
            );
        }
        return(
            <div>
                <h1>Preview:</h1>
                <h2>{this.props.previewedDocument.title}</h2>
                <h3>{this.props.previewedDocument.genre}</h3>
                <p>{this.props.previewedDocument.excerpt}</p>
            </div>
        );
    }
}