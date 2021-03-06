import React,{Component} from 'react';


class Document extends Component {
    constructor(props){
        super(props);
        // console.log('Document Props:', this.props);
    }

    render() {
        let title = this.props.title;
        if (title.length > 25){
            title = title.substring(0, 25) + '[...]';
        }
        return(
            <div
            className='col-md-6 post-container'>
                <div className='col-md-12 post'>
                    <h3 
                    className='post-title'
                    onClick={()=>{
                        this.props.selectPost(this.props.id)
                    }}>{title}</h3>
                    <h3>by <a href={`/users/${this.props.user.id}/profile`}>{this.props.user.name}</a></h3>
                    <h4>Type:</h4>
                    <h4>{this.props.genre}</h4>
                </div>
            </div>
        );
    }
}

export default Document;
