import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class SearchItem extends Component {
    constructor(props){
        super(props);

        console.log(this.props);
        this.state = {
            index: this.props.index
        }
    }

    render() {
        return(
            <div
            onClick={
                (e) => {
                    // this.props.selectDocument(this.props.index);
                    this.props.history.push(`/docs/${this.props.index}`);
                }
            }
            onMouseOver={
                (e) => {
                    var index = this.props.index;
                    this.props.previewDocument(index);
                }
            }
            className='document col-md-6'>
                <h1>{this.props.title}</h1>
                <h3>{this.props.genre}</h3>
            </div>
        )
    }
}

export default withRouter(SearchItem);