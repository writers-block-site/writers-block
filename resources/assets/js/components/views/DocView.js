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
            search: '',
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
    changePage(page) {
        if (this.state.search) {
            this.getPosts(this.state.search, page);
        } else {
            this.getPosts('', page)
        }
    }
    getPosts(search = this.state.search, page = 1){
        // console.log('Test')
        this.setState({
            searchPage: page,
            search: search
        },() => {

            {/*TODO: Find out why the paginate is breaking*/}
            
            console.log('Current Page:', this.state.searchPage)
            axios.get(`/docs?page=${page}&search=${search}`).then((results) => {
                // console.log(results)
                this.setState({
                    lastPage: results.data.last_page,
                    resultsArr: results.data.data
                })
            });

        })
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
                <Route path='/posts' exact component={() => (
                    <SearchView 
                    lastPage={this.state.lastPage}
                    currentPage={this.state.searchPage}
                    changePage={this.changePage.bind(this)}
                    getPosts={this.getPosts.bind(this)} 
                    posts={this.state.resultsArr} 
                    selectPost={this.selectPost}  />)} />
                <Route path='/posts/:id/view' component={() => (<SelectedDocView />)} />
                <Route path='/posts/:id/history' component={DiffView} />
            </Switch>
        )
    }
}

export default withRouter(DocView);