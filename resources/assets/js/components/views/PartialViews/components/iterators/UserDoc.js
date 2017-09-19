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
                <div className='col-md-6 text-center'>
                    <div
                    onClick={() => {
                        this.openPost();
                    }}
                    className='user-document'>
                        <div className=''>
                            <h3>{this.props.title}</h3>
                            <p>{this.props.type}</p>
                        </div>
                    </div>
                </div>

            )
        }
        var handlesArr = this.props.handle.split(',');
        var links = handlesArr.map((link,index)=>{
            return(
                <li><a href={`http://cdn.filestackcontent.com/${link}`}>Download Version {index+1}</a></li>
            )
        })

        return(
                <div className='col-md-6 text-center'>
                    
                    <div
                    className=' user-document'>

                        <h3 onClick={() => {
                            this.openPost();
                        }}>{this.props.title}</h3>
                        <p>{this.props.type}</p>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className="dropdown">
                                    <button className="btn btn-navbar-blue dropdown-toggle" type="button" data-toggle="dropdown">Options
                                        <span className="caret"></span></button>
                                        <ul className="dropdown-menu">
                                            <li><a type="button" className='' href={`/docs/${this.props.id}/edit`}>Edit Post</a></li>
                                            <li>
                                            <a type="button"
                                                onClick={
                                                    () =>{
                                                        this.props.deletePost(this.props.id)
                                                    }
                                                }
                                                className=''>Delete</a>
                                            </li>
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
