import React, {Component} from 'react'
import Comment from './iterators/Comment';


export default class CommentsContainer extends Component{
    constructor(props){
        super(props);
    }
    render() {
        if (this.props.comments){
            var comments = this.props.comments.map((comment) => {
                return(
                    <Comment
                    comment={comment.comment}
                    />
                )
            })
        }
        if (comments){
            return(
                <div className='float'>
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