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
            resultsArr: ''
        }
    }
    componentWillMount(){
        this.getPosts();
    }
    getPosts(page = this.state.searchPage){
        axios.get(`/api?page=${page}`).then((results) => {
            this.setState({
                lastPage: results.data.last_page,
                resultsArr: results.data.data
            }, () => {
                console.log(this.state.resultsArr)
            })
        });
    }
    render() {
        return(
            <Switch>
                <Route path='/docs' component={() => (<SearchView posts={this.state.resultsArr}  />)} />
                <Route path='/docs/:id/view' />
            </Switch>
        )
    }
}

export default DocView;