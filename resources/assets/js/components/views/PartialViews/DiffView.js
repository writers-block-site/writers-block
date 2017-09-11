import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Diff from 'react-diff';

class DiffView extends Component {
    render() {
        return(
            <Diff inputA="gogol" inputB="google" type="sentences" />
        )
    }
}

export default withRouter(DiffView);