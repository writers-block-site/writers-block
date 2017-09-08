import React, {Component} from 'react';

export default class SelectedDocument extends Component {
    render() {
        if (this.props.handle === '') {
            return (
                <div>
                    <h1>Loading...</h1>
                </div>
            )
        }
        return(
            <div className='col-md-8 selected-doc'>
                <iframe src={`http://process.filestackapi.com/output=f:pdf/${this.props.handle}`}/>
            </div>
        );
    }
}