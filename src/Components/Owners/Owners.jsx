import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddOwnerForm from '../AddOwnerForm/AddOwnerForm';

class Pets extends Component {
	state = {};
	componentDidMount() {
		this.getOwners();
	}

	getOwners = () => {
		this.props.dispatch({
			type: 'FETCH_OWNERS'
		});
	};

	// deleteOwner = (id) => {
	//     console.log('clicked delete', id);
	//     this.props.dispatch({
	//         type: 'DELETE_OWNER',
	//         payload: id
	//     })

	// }

	render() {
		let renderRows = this.props.reduxStore.ownerReducer.map(owner => {
			return (
				<tr key={owner.id}>
					<td>{owner.ownerName}</td>
					<td>{owner.petCount}</td>
					<td>
						<button>Delete</button>
					</td>
				</tr>
			);
		});
		return (
			<div>
				<h1>Owners</h1>
				<AddOwnerForm />
				<table>
					<thead>
						<tr>
							<th>Owner Name</th>
							<th>Number of Pets</th>
							<th>Delete</th>
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
