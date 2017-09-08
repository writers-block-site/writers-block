import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import SelectedDocument from './components/SelectedDocument'
import CommentForm from './components/CommentForm'

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
    postComment(){
        // console.log(this.props.match.params.id);
        var content = document.getElementById('comment-content').value
        // axios.post('/docs').then((results) => {console.log(results)})
        axios.post('/api/comments', {
            doc_id: this.props.match.params.id,
            comment: content
        },{
            withCredentials: true
        }).then(results => console.log(results));
    }
    render() {
        return (
            <div>
                <SelectedDocument handle={this.state.handle} />
                <CommentForm postComment={this.postComment.bind(this)} />
            </div>
        )
    }
}

export default withRouter(SelectedDocView);