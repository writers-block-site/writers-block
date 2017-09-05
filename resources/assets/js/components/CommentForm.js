import React, {Component} from 'react';

export default class CommentForm extends Component {
    constructor(props){
        super(props);
    }
    test(){
        console.log('Form submit!');
    }

    render() {
        return(
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    this.test();
                    console.log($);
                }} className='form-group-md'>
                    <textarea className='form-control' rows='10' type='text' placeholder='Leave a comment' />
                    <button
                    className='btn btn-danger'>Submit</button>
                </form>
            </div>
        );
    }
}