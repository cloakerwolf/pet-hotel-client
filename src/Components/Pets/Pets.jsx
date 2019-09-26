import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddPetForm from '../AddPetForm/AddPetForm';

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

    // deletePet = (id) => {
    //     console.log('clicked delete', id);
    //     this.props.dispatch({
    //         type: 'DELETE_PET',
    //         payload: id
    //     })

    // }

    render() {
        return (
            <div>
                <h1>{JSON.stringify(this.props.reduxStore)}</h1>
                <h1>Pets</h1>
                <AddPetForm />
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