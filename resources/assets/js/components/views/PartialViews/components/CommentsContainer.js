import React, {Component} from 'react'
import Comment from './iterators/Comment';


export default class CommentsContainer extends Component{
    constructor(props){
        super(props);
    }
    render() {
        if (this.props.comments){
            var comments = this.props.comments.reverse().map((comment) => {
                return(
                    <Comment
                    key={comment.comment + Math.random(0,100000)}
                    comment={comment.comment}
                    />
                )
            })
        }
        if (comments){
            return(
                <div className='float comments-container'>
                    {comments}
                </div>
            )
        }
        return(
            <div>
                <h1>Loading Comments...</h1>
            </div>
        )
    }
}