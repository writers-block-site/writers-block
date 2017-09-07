import React,{Component} from 'react';


class Document extends Component {
    constructor(props){
        super(props);
        console.log('Document Props:', this.props);
    }

    render() {
        return(
            <div>
                <h3>{this.props.title}</h3>
                <p>{this.props.genre}</p>
            </div>
        );
    }
}

export default Document;