import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddPetForm from '../AddPetForm/AddPetForm';

class Pets extends Component {
	state = {};
	componentDidMount() {
		this.getPets();
	}

	getPets = () => {
		this.props.dispatch({
			type: 'FETCH_PETS'
		});
	};

	deletePet = (id) => {
		console.log('clicked delete', id);
		this.props.dispatch({
			type: 'DELETE_PET',
			payload: id
		})
	}

	changeStatus = (id) => {
		this.props.dispatch({type: 'CHANGE_PET_STATUS', payload: id});
	}

	render() {
		let renderRows = this.props.reduxStore.petReducer.map(pet => {
			return (
				<tr key={pet.id}>
					<td>{pet.ownerName}</td>
					<td>{pet.petName}</td>
					<td>{pet.breed}</td>
					<td>{pet.color}</td>
					<td>{pet.checkedInStatus ? pet.checkedInDate : 'no'}</td>
					<td>
						<button className="btn btn-info" onClick={() => this.deletePet(pet.id)}>Delete</button>
						{pet.checkedInStatus ? 
						(
							<button className="btn btn-info" onClick={() => this.changeStatus(pet.id)}>Check Out</button>
						) : (
							<button className="btn btn-info" onClick={() => this.changeStatus(pet.id)}>Check In</button>
						)}
					</td>
				</tr>
			);
		});
		return (
			<div>
				<h3 className="subHead">Pets</h3>
				<AddPetForm />
				<br/>
				<table className="table table-striped">
					<thead className="thead-dark">
						<tr>
							<th>Owner Name</th>
							<th>Pet Name</th>
							<th>Breed</th>
							<th>Color</th>
							<th>Checked In Date</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>{renderRows}</tbody>
				</table>
			</div>
		);
	}
}

const mapStateToProps = reduxStore => {
	return {
		reduxStore
	};
};

export default connect(mapStateToProps)(Pets);
