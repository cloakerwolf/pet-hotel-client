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

	// deletePet = (id) => {
	//     console.log('clicked delete', id);
	//     this.props.dispatch({
	//         type: 'DELETE_PET',
	//         payload: id
	//     })

	// }

	render() {
		let renderRows = this.props.reduxStore.petReducer.map(pet => {
			return (
				<tr>
					<td>{pet.ownerName}</td>
					<td>{pet.petName}</td>
					<td>{pet.breed}</td>
					<td>{pet.color}</td>
					<td>{pet.checkedInStatus ? pet.checkedInDate : 'no'}</td>
					<td>
						<button>Delete</button>
						{pet.checkedInStatus ? (
							<button>Check Out</button>
						) : (
							<button>Check In</button>
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
