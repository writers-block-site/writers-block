import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import SelectedDocument from './components/SelectedDocument'
import MyStatefulEditor from './components/CommentForm'

class SelectedDocView extends Component {
    constructor(props){
        super(props);

        console.log('SelectedProps:', this.props)
        this.state = {
            handle: ''
        }
    }
    componentWillMount() {
        axios.get(`/api/docs/${this.props.match.params.id}`).then((results) => {
            this.setState({
                handle: results.data.handles
            })
        })
    }
    render() {
        return (
            <div>
                <SelectedDocument handle={this.state.handle} />
                <MyStatefulEditor />
            </div>
        )
    }
}

export default withRouter(SelectedDocView);