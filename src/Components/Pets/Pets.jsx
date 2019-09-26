import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddPetForm from '../AddPetForm/AddPetForm';
import PetItem from '../PetItem/PetItem';

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

	sortColumn = (property) => {
		this.props.dispatch({type: `SORT_${property}`, payload: this.state.sortmode});
		this.forceUpdate();
		this.setState({sortmode: !this.state.sortmode});
	}

	render() {
		let renderRows = this.props.reduxStore.petReducer.map(pet => {
			return (
				<PetItem key={pet.id} pet={pet}/>
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
							<th onClick={() => { this.sortColumn('OWNERNAME') }}>Owner Name</th>
							<th onClick={() => { this.sortColumn('PETNAME') }}>Pet Name</th>
							<th onClick={() => { this.sortColumn('BREED') }}>Breed</th>
							<th onClick={() => { this.sortColumn('COLOR') }}>Color</th>
							<th>Pet Photo</th>
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
