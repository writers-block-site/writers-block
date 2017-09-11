import React, {Component} from 'react';

export default class Comment extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <h4>Comment By [USER NAME HERE]</h4>
                <p>{this.props.comment}</p>
            </div>
        )
    }
}