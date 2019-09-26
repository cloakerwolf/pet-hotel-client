import React, { Component } from 'react';
import { connect } from 'react-redux';

class PetItem extends Component {

    state = {
        isEditMode: false,
        id: 0,
        petName: '',
        ownerId: 0,
        breed: '',
        color: ''
    }

    componentDidMount() {
        this.getOwners();
        this.setState({
            ...this.state,
            id: this.props.pet.id,
            petName: this.props.pet.petName,
            ownerId: this.props.pet.ownerId,
            breed: this.props.pet.breed,
            color: this.props.pet.color
        })
    }

    getOwners = () => {
        this.props.dispatch({
            type: 'FETCH_OWNERS'
        });
    };

    editPet = ()=>{
        this.setState({
            ...this.state,
            isEditMode: true
        })
    }

    handlePetEdit = (event, property) => {
        this.setState({ ...this.state, [property]: event.target.value });
    }

    saveChanges = ()=>{
        this.props.dispatch({
            type: 'EDIT_PET',
            payload: this.state
        })
    }

    changeStatus = (id) => {
        this.props.dispatch({ type: 'CHANGE_PET_STATUS', payload: id });
        this.setState({
            ...this.state,
            isCheckedIn: this.props.pet.isCheckedIn
        })
    }

    deletePet = (id) => {
        console.log('clicked delete', id);
        this.props.dispatch({
            type: 'DELETE_PET',
            payload: id
        })
    }

    render (){
        console.log(this.state)
        let renderDropdown = this.props.reduxStore.ownerReducer.map((owner) => {
            return (
                <option key={owner.id} value={owner.id}>{owner.ownerName}</option>
            )
        })//note: owner_id is coming in as a string!
        return this.state.isEditMode ? (
            <tr >
                <td><select value={this.state.ownerId} onChange={(event) => { this.handlePetEdit(event,'ownerId')}}>{renderDropdown}</select></td>
                <td><input value={this.state.petName} onChange={(event) => { this.handlePetEdit(event, 'petName')}}/></td>
                <td><input value={this.state.breed} onChange={(event) => { this.handlePetEdit(event, 'breed')}}/></td>
                <td><input value={this.state.color} onChange={(event) => { this.handlePetEdit(event, 'color')}}/></td>
                <td>{this.state.checkedInStatus ? this.state.checkedInDate : 'Not In'}</td>
            <td>
                    <button className="btn btn-info" onClick={() => this.saveChanges(this.state.id)}>Save Changes</button>
                    <button className="btn btn-info" onClick={() => this.deletePet(this.state.id)}>Delete</button>
                    {this.state.checkedInStatus ?
                    (
                            <button className="btn btn-info" onClick={() => this.changeStatus(this.state.id)}>Check Out</button>
                    ) : (
                            <button className="btn btn-info" onClick={() => this.changeStatus(this.state.id)}>Check In</button>
                    )}
            </td>
            </tr >)
            :
            (<tr key={this.props.pet.id}>
                <td>{this.props.pet.ownerName}</td>
                <td>{this.props.pet.petName}</td>
                <td>{this.props.pet.breed}</td>
                <td>{this.props.pet.color}</td>
                <td>{this.props.pet.checkedInStatus ? this.props.pet.checkedInDate : 'Not In'}</td>
                <td>
                    <button className="btn btn-info" onClick={() => this.editPet(this.props.pet.id)}>Edit</button>
                    <button className="btn btn-info" onClick={() => this.deletePet(this.props.pet.id)}>Delete</button>
                    {this.props.pet.checkedInStatus ?
                        (
                            <button className="btn btn-info" onClick={() => this.changeStatus(this.props.pet.id)}>Check Out</button>
                        ) : (
                            <button className="btn btn-info" onClick={() => this.changeStatus(this.props.pet.id)}>Check In</button>
                        )}
                </td>
            </tr>  )        
            
        
    }
}

const mapStateToProps = reduxStore => {
    return {
        reduxStore
    };
};

export default connect(mapStateToProps)(PetItem);