import React, {Component} from 'react'

export default class Pagination extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className='col-xs-12 pagination-center'>
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
        );
    }
}