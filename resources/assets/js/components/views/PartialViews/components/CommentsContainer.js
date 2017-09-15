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
                    id={comment.user.id}
                    username={comment.user.name}
                    />
                )
            })
        }
        if (comments){
            if (comments.length < 1) {
                return(
                    <div className='row'>
                        <div className=' col-md-4 float comments-container'>
                            <h4>No Comments yet!</h4>
                        </div>
                    </div>
                )
            }
            return(
                <div className='row'>
                    <div className=' col-md-4 float comments-container'>
                        {comments}
                    </div>
                </div>
            )
        }
        return(
            <div className='col-md-4 comments-container'>
                <h1>Loading Comments...</h1>
            </div>
        )
    }
}