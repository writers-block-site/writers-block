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
            <div>
                <form
                className='form-group-md col-md-offset-3 col-md-6'
                onSubmit={(e) => {
                    e.preventDefault();
                    this.handleSubmit(this.state.term);
                }} >

                    <div className="input-group">
                        <input 
                        className='form-control' 
                        id='search' 
                        name='search' 
                        type='text' 
                        value={this.state.search} 
                        onChange={(e) => {
                            this.onInputChange(e.target.value);
                        }}  />
                        <span className='input-group-btn'>
                            <button type="submit" className="btn btn-default">Search</button>
                        </span>
                    </div>
                </form>
                <div>
                    <ul className='pagination'>
                        <li className='page-item'>
                            <a className="page-link" onClick={()=> {
                                    if ((this.props.currentPage - 1 ) >= 1) {
                                        let previous = (this.props.currentPage - 1)
                                        this.props.changePage(previous)
                                    }
                                }}>
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className='page-item'>
                            <a className='page-link'>{this.props.currentPage}</a>
                        </li>
                        <li className='page-item'>
                            <a className="page-link" onClick={()=> {
                                    if ((this.props.currentPage + 1) <= this.props.lastPage) {
                                        let next = (this.props.currentPage + 1);
                                        this.props.changePage(next)
                                    }
                                }}>
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
