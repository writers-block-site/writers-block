import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import UserDocs from './PartialViews/UserDocs';

class Profile extends Component {
    constructor(props){
        super(props);

        console.log(props);
        this.state = {
            profileMatch: '',
            userProfile: '',
            userDocs: '',
            userID: ''

        }
        this.getUser = this.getUser.bind(this);
    }
    componentWillMount() {
        this.getUser();
    }
    getUser() {
        axios.get(`/profile/userPage/${this.props.match.params.user}`).then((results) => {
            console.log(results);
            if (results.data){
                this.setState({
                    profileMatch: results.data.profileMatch,
                    userProfile: results.data.user.name,
                    userDocs: results.data.user.docs,
                    userID: results.data.user.id
                }, () => {
                    console.log(this.state)
                })
            }
        })
    }
    render() {
        if (!this.state.userProfile) {
            return(
                <div className='profile container'>
                    <h1>Loading...</h1>
                </div>
            )
        } else if (!this.state.profileMatch) {
            return(
                <div className='profile container'>
                    <h1>{this.state.userProfile}'s Profile</h1>
                    <div className='user-documents '>
                    <h2 className='posts-title'>Posts</h2>
                        <UserDocs profileMatch={this.state.profileMatch} userDocs={this.state.userDocs} />
                    </div>
                </div>
            )
        }
        return (
            <div className='profile container'>
                <h1>Welcome, {this.state.userProfile}!</h1>
                <div className='user-documents'>
                <h2 className='posts-title'>Posts</h2>
                    <UserDocs getUser={this.getUser} profileMatch={this.state.profileMatch} userDocs={this.state.userDocs} />
                </div>
            </div>
        )
    }
}

export default withRouter(Profile);