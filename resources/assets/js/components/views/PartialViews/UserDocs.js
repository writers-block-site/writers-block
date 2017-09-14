import React, {Component} from 'react';
import UserDoc from './components/iterators/UserDoc';

export default class UserDocs extends Component {
    constructor(props) {
        super(props);

        // console.log('USERDOCS:', this.props)
    }
    deletePost(id) {
        if (confirm('Are you sure you want to delete this post?')){
            axios.delete(`/docs/${id}`).then((results) => {
                console.log(results);
                window.setTimeout(() => {
                    this.props.getUser();

                }, 100);
            })

        }
    }
    render () {
        if (this.props.userDocs.length < 1){
            if (this.props.profileMatch){
                return(
                    <div className=''>
                        <h2>No Posts yet, upload some <a href="/docs/create">here</a>!</h2>
                    </div>
                )
            } else {
                return (
                    <div className=''>
                        <h2>Nothing here yet :(</h2>
                    </div>
                )
            }
            return(
                <div>

                </div>
            )
        }
        var userDocs = this.props.userDocs.map((doc) => {
            return(
                <UserDoc
                key={doc.id + doc.handles}
                deletePost={this.deletePost.bind(this)}
                profileMatch={this.props.profileMatch}
                handle={doc.handles}
                id={doc.id}
                title={doc.title}
                type={doc.genre}/>
            )
        })
        return(
            <div className=''>
                {userDocs}
            </div>
        )
    }
}
