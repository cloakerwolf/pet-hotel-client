import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddPetForm extends Component {
    state = {
        petName: '',
        color: '',
        breed: '',
        url: '',
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
        this.setState({
            petName: '',
            color: '',
            breed: '',
            url: '',
            ownerId: 0});
    }

    handlePetInfo = (event, property) => {
        this.setState({ ...this.state, [property]: event.target.value });
    }

    render() {
        console.log(this.state)
        let renderDropdown = this.props.reduxStore.ownerReducer.map((owner)=>{
            return (
                <option key={owner.id} value={owner.id}>{owner.ownerName}</option>
            )
        })//note: owner_id is coming in as a string!
        return (
            <form onSubmit={this.handleNewPet}>
                <input placeholder='Pet Name' onChange={(event) => { this.handlePetInfo(event, 'petName') }}
                    value={this.state.petName} />
                <input placeholder='Pet Color' onChange={(event) => { this.handlePetInfo(event, 'color') }}
                    value={this.state.color} />
                <input placeholder='Pet Breed' onChange={(event) => { this.handlePetInfo(event, 'breed') }}
                    value={this.state.breed} />
                <input placeholder='URL' onChange={(event) => { this.handlePetInfo(event, 'url') }}
                    value={this.state.url} />
                <select onChange={(event) => { this.handlePetInfo(event, 'ownerId') }}>
                    <option value={0}>Choose Owner</option>
                    {renderDropdown}
                </select>
                <button className="btn btn-info" type='submit' > Add Pet </button>
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
