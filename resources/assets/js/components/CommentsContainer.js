import React, {Component} from 'react';
import PreviewedDocument from './PreviewedDocument';
import Comment from './Comment';
import CommentForm from './CommentForm';

export default class CommentsContainer extends Component {
    render() {
        if(this.props.selectedDocument){
            var doc = this.props.selectedDocument;
            //Checking for 0 comments...
            if(doc.comments.length === 0 ){
                return(
                    <div>
                        <h1>No comments yet! Make one below</h1>
                        <CommentForm />
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
                    <CommentForm />
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