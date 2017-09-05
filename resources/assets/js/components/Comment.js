import React, {Component} from 'react';

export default class Comment extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className='comment'>
                <h3>{this.props.user}</h3>
                <p>{this.props.content}</p>
            </div>

        )
    }
}