import React, {Component, PropTypes} from 'react';

export default class CommentForm extends Component {
    constructor(props){
        super(props);
    }
    formHandler() {
        console.log('Submitted!');
        this.props.postComment()
    }
    render() {
        return(
            <div className='col-md-4 float comment-form'>
                <h4>Comments:</h4>
                <form className='form-group-md' onSubmit={(e) => {
                    e.preventDefault();
                    this.formHandler();
                    }}>
                    <textarea className='form-control' name="content" id="comment-content" cols="30" rows="10" placeholder='Leave a comment! Remember, CONSTRUCTIVE criticism :)' />
                    <button className='btn btn-info'>Submit</button>
                </form>
            </div>
        )
    }
}
