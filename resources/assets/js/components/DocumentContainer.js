import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import SearchItem from './SearchDocument';

class DocumentContainer extends Component {
    constructor(props){
        super(props);

        console.log('Document Props', this.props);
    }
    render() {
        if(this.props.selectedDocument){
            var doc = this.props.selectedDocument;
            return(
                <div>
                    <h1>{doc.title}</h1>
                    <h4>{doc.genre}</h4>
                </div>
            )
        }
        if (this.props.documentsArr) {
            var documents = this.props.documentsArr.map((document) => {
                return(
                    <div>
                        <SearchItem
                        selectDocument={this.props.selectDocument}
                        previewDocument={this.props.previewDocument}
                        key={document.index}
                        index={document.index}
                        title={document.title}
                        genre={document.genre}
                         />
                    </div>
                );
            });
        }
        return(
            <div>
        <div type="filepicker-preview" data-fp-url="https://www.filestackapi.com/api/preview/7cSeLSlZSmCk3k8CQtAv" width='750' height='500'> </div>
        <script src="https://api.filestackapi.com/filestack.js"></script>
                <h1>{documents}</h1>
            </div>
        )
    }
}

export default withRouter(DocumentContainer);