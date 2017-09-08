import React, {Component} from 'react';

export default class SelectedDocument extends Component {
    render() {
        if (this.props.handle === '') {
            return (
                <div className='col-md-8'>
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
// import React, { Component } from 'react';
// import { Document, Page } from 'react-pdf';
 
// export default class SelectedDocument extends Component {
//     constructor(props){
//         super(props);

//         console.log(props);
//     }
//             state = {
//               numPages: null,
//               pageNumber: 1,
//             }
 
//   onDocumentLoad({ numPages }) {
//     this.setState({ numPages });
//   }
 
//   render() {
//       if(this.props.handle !== ''){
//         return (
//             <div className='col-md-8'>
//             <Document
//             file={`http://process.filestackapi.com/output=f:pdf/${this.props.handle}`}
//             onLoadSuccess={this.onDocumentLoad}
//             >
//             <Page
//                 pageNumber={this.state.pageNumber}
//             />
//             </Document>
//             <p>Page {this.state.pageNumber} of {this.state.numPages}</p>
//         </div>
//         );
//     }

//             return(
//                 <div className='col-md-8'>
//                     <h1>Loading...</h1>
//                 </div>
//             );
//   }
// }