import React, {Component} from 'react';
import PreviewedDocument from './PreviewedDocument';
import Comment from './Comment';

export default class CommentsContainer extends Component {
    render() {
        if(this.props.selectedDocument){
            var doc = this.props.selectedDocument;
            //Checking for 0 comments...
            if(doc.comments.length === 0 ){
                return(
                    <div>
                        <h1>No comments yet! Make one below</h1>
                    </div>
                );
            }
            //If comments, render them
            var comments = doc.comments.map((comment) => {
                return(
                    <div>
                        <Comment 
                        user={comment.user}
                        content={comment.content}/>
                    </div>
                );
            })
            return(
                <div>
                    <div>{comments}</div>
                    <div>
                    </div>
                </div>
            );
        }
        return (
            <div className='search'>
                <PreviewedDocument
                previewedDocument={this.props.previewedDocument}
                 />
            </div>
        )
    }
}