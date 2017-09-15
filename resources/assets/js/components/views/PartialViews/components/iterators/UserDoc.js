import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class UserDoc extends Component {
    constructor(props){
        super(props);
        // console.log(this.props.handle);
        // console.log('USERDOC', this.props)
    }
    openPost(){
        this.props.history.push(`/posts/${this.props.id}/view`);
    }
    render() {
        if (!this.props.profileMatch) {
            return(
                <div
                onClick={() => {
                    this.openPost();
                }}
                 className='col-md-4 user-document'>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.type}</p>
                </div>

            )
        }
        var handlesArr = this.props.handle.split(',');
        var links = handlesArr.map((link,index)=>{
            return(
                <li><a href={`http://cdn.filestackcontent.com/${link}`}>Version {index+1}</a></li>
            )
        })

        return(
                <div className='col-md-4 text-center'>
                    
                    <div
                    className=' user-document'>

                        <h3 onClick={() => {
                            this.openPost();
                        }}>{this.props.title}</h3>
                        <p>{this.props.type}</p>
                        <div className='row'>
                            <div className='col-md-12'>
                                <button
                                    onClick={
                                        () =>{
                                            this.props.deletePost(this.props.id)
                                        }
                                    }
                                    className='btn btn-danger'>Delete</button>
                            </div>
                            <div className='col-md-12'>
                                <a className='btn btn-warning' href={`/docs/${this.props.id}/edit`}>Edit Post</a>
                            </div>
                            <div className='col-md-12'>
                                <div className="dropdown">
                                    <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Download previous uploads
                                        <span className="caret"></span></button>
                                        <ul className="dropdown-menu">
                                            {links}
                                        </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            )
    }
}

export default withRouter(UserDoc);
