import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Diff from 'react-diff';

class DiffView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            doc1: 'Loading...',
            doc2: 'Loading...',
            compareBy: 'sentences'
        }
    }
    componentDidMount() {
        axios.get(`/docs/getDiff/${this.props.match.params.id}`).then((results) => {
            console.log(results);
            this.setState({
                doc1: results.data.doc1,
                doc2: results.data.doc2
            })
        })
    }
    compareBy(type) {
        this.setState({
            compareBy: type
        })
    }
    render() {
        return(
            <div>
                <div className='container diff-container'>
                    <Diff inputA={this.state.doc2} inputB={this.state.doc1} type={this.state.compareBy} />
                    <div className='diff-buttons'>
                        <button
                        className='btn btn-primary'
                        onClick={() => {
                            this.compareBy('chars')
                        }}
                        >Compare Characters</button>
                        <button
                        className='btn btn-info'
                        onClick={() => {
                            this.compareBy('words')
                        }}
                        >Compare Words</button>
                        <button
                        className='btn btn-warning'
                        onClick={() => {
                            this.compareBy('sentences')
                        }}
                        >Compare Sentences</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(DiffView);
