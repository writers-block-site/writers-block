import React, {Component} from 'react';

class Landing extends Component {
    render() {
        var test = 'Hello!'
        return(
            <div id='home'>
                <div className='title-container'>
                    <span className='title' >Writer's Block  <span className="glyphicon glyphicon-book book"></span></span>
                </div>
            </div>
        );
    }
}

export default Landing;