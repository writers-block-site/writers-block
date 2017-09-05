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
                }} className='form-group-lg'>
                    <textarea className='form-control' type='text' />
                    <button
                    className='btn btn-danger'>Submit</button>
                </form>
            </div>
        );
    }
}