import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class DocHistoryButtons extends Component {
    render() {
        return(
            <button
            className="btn btn-danger col-xs-4"
            onClick={() => {
                this.props.history.push(`/posts/${this.props.id}/history`)
            }}
            >View Update History</button>
        )
    }
}

export default withRouter(DocHistoryButtons);