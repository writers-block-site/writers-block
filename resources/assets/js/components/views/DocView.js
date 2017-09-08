import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import SearchView from './PartialViews/SearchView';
import SelectedDocView from './PartialViews/SelectedDocView';

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
        this.getPosts();
    }
    getPosts(page = this.state.searchPage){
        axios.get(`/docs?page=${page}`).then((results) => {
            console.log(results)
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
                this.props.history.push(`/docs/${this.state.selectedPost}/view`)
            });
    }
    render() {
        return(
            <Switch>
                <Route path='/docs' exact component={() => (<SearchView posts={this.state.resultsArr} selectPost={this.selectPost}  />)} />
                <Route path='/docs/:id/view' component={() => (<SelectedDocView />)} />
            </Switch>
        )
    }
}

export default withRouter(DocView);