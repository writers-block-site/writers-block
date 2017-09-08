import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import SelectedDocument from './components/SelectedDocument'
import CommentForm from './components/CommentForm'

class SelectedDocView extends Component {
    constructor(props){
        super(props);

        this.state = {
            handle: ''
        }
    }
    componentWillMount() {
        axios.get(`/api/docs/${this.props.match.params.id}`).then((results) => {
            console.log(results.data.handles)
            this.setState({
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
        }).then(results => console.log(results));
    }
    render() {
        document.onmouseup = document.onkeyup = document.onselectionchange = () => {
            // document.getElementById("sel").value = getSelectionText();
            console.log('Hello!')
            console.log(this.getText());
          };
        return (
            <div>
                <SelectedDocument handle={this.state.handle} />
                <CommentForm postComment={this.postComment.bind(this)} />
            </div>
        )
    }
}

export default withRouter(SelectedDocView);