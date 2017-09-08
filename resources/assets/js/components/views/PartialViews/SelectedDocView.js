import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import SelectedDocument from './components/SelectedDocument'
import CommentForm from './components/CommentForm'
import CommentsContainer from './components/CommentsContainer'

class SelectedDocView extends Component {
    constructor(props){
        super(props);

        this.state = {
            handle: '',
            comments: ''
        }
        this.getComments = this.getComments.bind(this);
    }
    componentWillMount() {
        this.getComments();
    }
    getComments(){
        axios.get(`/docs/${this.props.match.params.id}`).then((results) => {
            console.log(results)
            this.setState({
                comments: results.data.comments,
                handle: results.data.handles
            })
        })
    }
    getText(){
        var text = "";
        var iframe = document.getElementById('iframe');
        var idoc= iframe.contentDocument || iframe.contentWindow.document;
        var iwin= iframe.contentWindow || iframe.contentDocument.defaultView;
        
        text = iwin.getSelection().toString()
        // text = iframe.contentWindow.getSelection().toString();
        return text;
    }
    postComment(){
        // console.log(this.props.match.params.id);
        var content = document.getElementById('comment-content').value
        // axios.post('/docs').then((results) => {console.log(results)})
        axios.post('/comments', {
            doc_id: this.props.match.params.id,
            comment: content
        },{
            withCredentials: true
        }).then(this.getComments());
    }
    render() {
        return (
            <div>
                <SelectedDocument handle={this.state.handle} />
                <div>
                    <CommentForm getComments={this.getComments} postComment={this.postComment.bind(this)} />
                    <CommentsContainer comments={this.state.comments}  />
                </div>
            </div>
        )
    }
}

export default withRouter(SelectedDocView);