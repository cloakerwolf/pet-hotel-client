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

    // deleteOwner = (id) => {
    //     console.log('clicked delete', id);
    //     this.props.dispatch({
    //         type: 'DELETE_OWNER',
    //         payload: id
    //     })

    // }

    render() {
        return (
            <div>
                <h1>{JSON.stringify(this.props.reduxStore)}</h1>
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