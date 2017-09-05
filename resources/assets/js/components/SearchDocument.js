import React, {Component} from 'react';

export default class SearchItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            index: this.props.index
        }
    }

    render() {
        return(
            <div 
            onMouseOver={
                (e) => {
                    var index = this.props.index;
                    this.props.previewDocument(index);
                }
            }
            className='document'>
                <h1>{this.props.title}</h1>
                <h3>{this.props.genre}</h3>
            </div>
        )
    }
}