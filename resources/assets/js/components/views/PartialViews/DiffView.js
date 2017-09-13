import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Diff from 'react-diff';

class DiffView extends Component {
    componentDidMount() {
        axios.get(`/docs/getDiff/${this.props.match.params.id}`).then((results) => {
            console.log(results);
        })
    }
    render() {
        return(
            <Diff inputA="gogol" inputB="google" type="sentences" />
        )
    }
}

export default withRouter(DiffView);