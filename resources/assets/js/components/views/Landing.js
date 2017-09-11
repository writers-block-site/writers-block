import React, {Component} from 'react';

class Landing extends Component {
    render() {
        var test = 'Hello!'
        return(
            <div id='home'>
                <div className='title-container'>
                    <span className='title' >Writer's Block  <span className="glyphicon glyphicon-book book"></span></span>
                </div>
                <div>
                    <div className='container'> 
                        
                        <blockquote id='p' className='lead'>We are a community for writers to get advice and critique on their creative work from their peers</blockquote>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;