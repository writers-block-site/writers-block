import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import SelectedDocument from './components/SelectedDocument'
import CommentForm from './components/CommentForm'
import CommentsContainer from './components/CommentsContainer'
import DocHistoryButtons from './components/DocHistoryButtons'

class SelectedDocView extends Component {
    constructor(props){
        super(props);

        this.state = {
            handle: 'NOT A HANDLE',
            comments: '',
            isLoggedIn: false
        }
        this.getComments = this.getComments.bind(this);
    }
    componentDidMount() {
        this.getComments();
    }
    getComments(){
        axios.get(`/docs/${this.props.match.params.id}`).then((results) => {
            console.log(results)
            this.setState({
                comments: results.data.comments,
                handle: results.data.docs.handles.reverse(),
                isLoggedIn: results.data.check
            })
        })
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
        }).then(() => {
            window.setTimeout(() => {
                this.getComments();
            }, 400);
        });
    }
    render() {
        if (!this.state.isLoggedIn) {
            return(
                <div>
                    <SelectedDocument handle={this.state.handle[0]} />
                    <div className='scroll'>
                        <h4>Login or Register to leave a comment and view history!</h4>
                        <CommentsContainer comments={this.state.comments}  />
                    </div>
                </div>
            )
        }
        //Shouldn't be rendering by default, but it is
        if (this.state.handle !== 'NOT A HANDLE'){
            return (
                <div>
                    <SelectedDocument handle={this.state.handle[0]} />
                    <div className='scroll'>
                        <DocHistoryButtons id={this.props.match.params.id}  />
                        <CommentForm getComments={this.getComments} postComment={this.postComment.bind(this)} />
                        <CommentsContainer comments={this.state.comments}  />
                    </div>
                </div>
            )
  
        }
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
}

export default withRouter(SelectedDocView);