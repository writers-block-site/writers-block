import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Diff from 'react-diff';

class DiffView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            doc1: 'Loading...',
            doc2: 'Loading...'
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
    render() {
        return(
            <div className='container diff-container'>
                <Diff inputA={this.state.doc1} inputB={this.state.doc2} type="sentences" />
            </div>
        )
    }
}

export default withRouter(DiffView);