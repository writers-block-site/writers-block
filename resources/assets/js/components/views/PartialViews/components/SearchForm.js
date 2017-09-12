import React, {Component} from 'react';

export default class SearchForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }
    }
    onInputChange(term) {
        this.setState({term})
    }
    handleSubmit(search) {
        console.log('Not Submit');
        this.props.getPosts(search)
    }
    render() {
        return (
            <form 
            className='form-group-md'
            onSubmit={(e) => {
                e.preventDefault();
                this.handleSubmit(this.state.term);
            }} >
                <input 
                className='form-control' 
                id='search' 
                name='search' 
                type='text' 
                value={this.state.search} 
                onChange={(e) => {
                    this.onInputChange(e.target.value);
                }}  />
                <button className='btn btn-default'>Submit</button>
            </form>
        )
    }
}