import React, {Component, PropTypes} from 'react';

export default class CommentForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            comment: ''
        }
    }
    onInputChange(comment) {
        this.setState({
            comment
        })
    }
    formHandler() {
        console.log('Submitted!');
        this.props.postComment()
        window.setTimeout(() => {
            this.setState({
                comment: ''
            }, 50)
        })
    }
    render() {
        return(
            <div className='col-md-4 float comment-form'>

                <h4>Comments:</h4>

                <form className='form-group-md' onSubmit={(e) => {
                    e.preventDefault();
                    this.formHandler();
                    }}>

                    <textarea
                    onChange={
                        (e) => {
                            this.onInputChange(e.target.value);
                        }
                    }
                    value={this.state.comment}
                    className='form-control' 
                    name="content" 
                    /*Overriding bootstrap */
                    style={{height: '38vh'}}
                    id="comment-content" 
                    cols="30"  
                    placeholder='Leave a comment! Remember, CONSTRUCTIVE criticism :)' />
                    <button className='btn btn-info col-xs-12'>Submit</button>
                </form>
            </div>
        )
    }

    newFunction() {
        this.formHandler();
    }
}
