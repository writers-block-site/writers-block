import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import SearchView from './PartialViews/SearchView';
import SelectedDocView from './PartialViews/SelectedDocView';
import DiffView from './PartialViews/DiffView';

class DocView extends Component {
    constructor(props){
        super(props);

        this.state = {
            searchPage: 1,
            lastPage: '',
            resultsArr: '',
            selectedPost: ''
        }
        this.selectPost = this.selectPost.bind(this);
    }
    componentWillMount(){
        axios.get(`/docs?page=1`).then((results) => {
            // console.log(results)
            this.setState({
                lastPage: results.data.last_page,
                resultsArr: results.data.data
            })
        });
    }
    getPosts(search = '', page = this.state.searchPage){
        // console.log('Test')
        axios.get(`/docs?search=${search}&page=${page}`).then((results) => {
            // console.log(results)
            this.setState({
                lastPage: results.data.last_page,
                resultsArr: results.data.data
            })
        });
    }
    selectPost(id = 2){
            this.setState({
                selectedPost: id
            }, () => {
                this.props.history.push(`/posts/${this.state.selectedPost}/view`)
            });
    }
    render() {
        return(
            <Switch>
                <Route path='/posts' exact component={() => (<SearchView getPosts={this.getPosts.bind(this)} posts={this.state.resultsArr} selectPost={this.selectPost}  />)} />
                <Route path='/posts/:id/view' component={() => (<SelectedDocView />)} />
                <Route path='/posts/:id/history' component={DiffView} />
            </Switch>
        )
    }
}

export default withRouter(DocView);