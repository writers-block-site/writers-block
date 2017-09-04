import React, {Component} from 'react';
import PreviewedDocument from './PreviewedDocument';

export default class CommentsContainer extends Component {
    render() {
        return (
            <div className='search'>
                <PreviewedDocument
                previewedDocument={this.props.previewedDocument}
                 />
            </div>
        )
    }
}