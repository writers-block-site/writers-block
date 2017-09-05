import React, {Component} from 'react';
import SearchItem from './SearchDocument';

export default class DocumentContainer extends Component {
    constructor(props){
        super(props);
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
                <h1>{documents}</h1>
            </div>
        )
    }
}