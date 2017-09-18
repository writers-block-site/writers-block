import React,{Component} from 'react';


class Document extends Component {
    constructor(props){
        super(props);
        // console.log('Document Props:', this.props);
    }

    render() {
        return(
            <div
            className='post col-md-6'>
                <h3 
                onClick={()=>{
                    this.props.selectPost(this.props.id)
                }}>{this.props.title}</h3>
                <h4>by <a href={`/users/${this.props.user.id}/profile`}>{this.props.user.name}</a></h4>
                <p>{this.props.genre}</p>
            </div>
        );
    }
}

export default Document;
