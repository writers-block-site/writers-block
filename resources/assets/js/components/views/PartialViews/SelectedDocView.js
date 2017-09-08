import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import SelectedDocument from './components/SelectedDocument'

class SelectedDocView extends Component {
    render() {
        return (
            <div>
                <SelectedDocument />
            </div>
        )
    }
}

export default SelectedDocView;