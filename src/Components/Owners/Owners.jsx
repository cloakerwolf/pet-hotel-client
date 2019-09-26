import React, { Component } from 'react';
import { connect } from 'react-redux';

class Pets extends Component {
    state = {}
    componentDidMount() {
        this.getOwners();
    }

    getOwners = () => {
        this.props.dispatch({
            type: 'FETCH_OWNERS'
        })
    }

    render() {
        return (
            <div>
                <h1>{JSON.stringify(this.reduxStore)}</h1>
                <h1>Owners</h1>

            </div>
        );
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        reduxStore,
    }
}

export default connect(mapStateToProps)(Pets);