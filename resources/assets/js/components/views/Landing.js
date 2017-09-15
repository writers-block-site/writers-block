import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class Landing extends Component {
    render() {
        var test = 'Hello!'
        return(
            <div id='home'>
                <div className='title-container'>
                    <span className='title' >Writer's Block</span>
                    <div className=''>
                        <a className='tagline' style={{
                            'font-family': "Comfortaa", 
                            'font-size': '2em',
                            'color': '#FEFEFE'
                             
                        }} href="/posts">Inspiration is a click away</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Landing);