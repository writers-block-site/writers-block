import React,{Component} from 'react';


class Document extends Component {
    constructor(props){
        super(props);
        // console.log('Document Props:', this.props);
    }

    render() {
        return(
            <div
            className='col-md-6 post-container'>
                <div className='col-md-12 post'>
                    <h3 
                    onClick={()=>{
                        this.props.selectPost(this.props.id)
                    }}>{this.props.title}</h3>
                    <h4>by <a href={`/users/${this.props.user.id}/profile`}>{this.props.user.name}</a></h4>
                    <p>{this.props.genre}</p>
                </div>
            </div>
        );
    }
}

export default Document;
