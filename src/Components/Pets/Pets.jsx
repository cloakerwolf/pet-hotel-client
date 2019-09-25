import React, { Component } from 'react';
import { connect } from 'react-redux';

class Pets extends Component {
    state = {}
    componentDidMount() {
        this.getPets();
    }

    getPets = () => {
        this.props.dispatch({
            type: 'FETCH_PETS'
        })
    }

    render() {
        return (
            <div>
                <h1>{JSON.stringify(this.reduxStore)}</h1>
                <h1>Pets</h1>
                
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