import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddPetForm extends Component {
    state = {
        petName: '',
        color: '',
        breed: '',
        ownerId: 0
    }

    componentDidMount() {
        this.getOwners();
    }

    getOwners = () => {
        this.props.dispatch({
            type: 'FETCH_OWNERS'
        });
    };

    handleNewPet = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_PET', payload: this.state })
    }

    handlePetInfo = (event, property) => {
        this.setState({ ...this.state, [property]: event.target.value });
    }

    render() {
        let renderDropdown = this.props.reduxStore.ownerReducer.map((owner)=>{
            return (
                <option value={owner.id}>{owner.ownerName}</option>
            )
        })
        return (
            <form onSubmit={this.handleNewPet}>
                <input placeholder='Pet Name' onChange={(event) => { this.handlePetInfo(event, 'petName') }}
                    value={this.state.petName} />
                <input placeholder='Pet Color' onChange={(event) => { this.handlePetInfo(event, 'color') }}
                    value={this.state.color} />
                <input placeholder='Pet Breed' onChange={(event) => { this.handlePetInfo(event, 'breed') }}
                    value={this.state.breed} />
                <select onChange={(event) => { this.handlePetInfo(event, 'ownerId') }}>
                    <option value={0}>Choose Owner</option>
                    {renderDropdown}
                </select>
                <button type='submit' > Add Pet </button>
            </form>
        );
    }
}

const mapStateToProps = reduxStore => {
    return {
        reduxStore
    };
};

export default connect(mapStateToProps)(AddPetForm);
