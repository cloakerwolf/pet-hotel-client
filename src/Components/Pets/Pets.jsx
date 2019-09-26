import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddPetForm from '../AddPetForm/AddPetForm';

class Pets extends Component {
	state = {	
		sortmode: true,
	};
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

	sortColumn = (property) => {
		this.props.dispatch({type: `SORT_${property}`, payload: this.state.sortmode});
		this.forceUpdate();
		this.setState({sortmode: !this.state.sortmode});
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
					<td>{pet.checkedInStatus ? pet.checkedInDate : 'Not In'}</td>
					<td>
						<button onClick={() => this.deletePet(pet.id)}>Delete</button>
						{pet.checkedInStatus ? 
						(
							<button onClick={() => this.changeStatus(pet.id)}>Check Out</button>
						) : (
							<button onClick={() => this.changeStatus(pet.id)}>Check In</button>
						)}
					</td>
				</tr>
			);
		});

		return (
			<div>
				<h1>Pets</h1>
				<AddPetForm />
				<table>
					<thead>
						<tr>
							<th onClick={() => { this.sortColumn('OWNERNAME') }}>Owner Name</th>
							<th onClick={() => { this.sortColumn('PETNAME') }}>Pet Name</th>
							<th onClick={() => { this.sortColumn('BREED') }}>Breed</th>
							<th onClick={() => { this.sortColumn('COLOR') }}>Color</th>
							<th onClick={() => { this.sortColumn('DATE') }}>Checked In Date</th>
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
