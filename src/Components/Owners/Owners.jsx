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

	deleteOwner = (id) => {
        console.log('clicked delete', id);
        this.props.dispatch({
            type: 'CLEAR_ERROR'
        })
	    this.props.dispatch({
	        type: 'DELETE_OWNER',
	        payload: id
	    })

    }
    
    deleteError = () => {
        this.props.dispatch({
            type: 'CLEAR_ERROR'
        })
    }

	render() {
		let renderRows = this.props.reduxStore.ownerReducer.map(owner => {
			return (
				<tr key={owner.id}>
					<td>{owner.ownerName}</td>
					<td>{owner.petCount}</td>
					<td>
						<button className="btn btn-info" onClick={() => this.deleteOwner(owner.id)}>Delete</button>
					</td>
				</tr>
			);
		});
		return (
			<div>
				<h3 className="subHead">Owners</h3>
				<AddOwnerForm />
				<br/>
				<table className="table table-striped">
					<thead className="thead-dark">
						<tr>
							<th>Owner Name</th>
							<th>Number of Pets</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>{renderRows}</tbody>
				</table>
                <p onClick={this.deleteError}>{this.props.reduxStore.errorReducer}</p>
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
