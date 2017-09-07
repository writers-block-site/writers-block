import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class Profile extends Component {
    constructor(props){
        super(props);

        console.log(props);
    }
    render() {
        return (
            <div>
                <h1>Welcome, {this.props.match.params.user}!</h1>
            </div>
        )
    }
}

export default withRouter(Profile);