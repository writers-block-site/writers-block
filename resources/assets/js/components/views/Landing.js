import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class Landing extends Component {
    render() {
        var test = 'Hello!'
        return(
            <div id='home'>
                <div className='title-container'>
                    <span className='title' >Writer's Block</span>
                    <div>
                        <button onClick={() => {
                            this.props.history.push('/posts')
                        }} className='btn btn-default'>All Posts</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Landing);