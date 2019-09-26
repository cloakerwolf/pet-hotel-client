import React, { Component } from 'react';

class AddPetForm extends Component {
    state = {
        petName: '',
        color: '',
        breed: '',
        ownerId: ''
    }

    handleNewPet = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_PET', payload: this.state })
    }

    handlePetInfo = (event, property) => {
        this.setState({ ...this.state, [property]: event.target.value });
    }

    render() {
        // let ownerList = this.props.ownerList.map(owner => 
        //     <option key={owner.id} value={owner.id}>{owner.ownerName}</option>);
        return (
            <form onSubmit={this.handleNewPet}>
                <input placeholder='Pet Name' onChange={(event) => { this.handlePetInfo(event, 'petName') }}
                    value={this.state.petName} />
                <input placeholder='Pet Color' onChange={(event) => { this.handlePetInfo(event, 'color') }}
                    value={this.state.color} />
                <input placeholder='Pet Breed' onChange={(event) => { this.handlePetInfo(event, 'breed') }}
                    value={this.state.breed} />
                <select onChange={(event) => { this.handlePetInfo(event, 'ownerId') }}>
                    <option>Choose Owner</option>
                    <option value='1'>Aaron</option>
                    <option value='2'>Alex</option> 
                </select>
                <button type='submit' > Add Pet </button>
            </form>
        );
    }
}

export default AddPetForm;