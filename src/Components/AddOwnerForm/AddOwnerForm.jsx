import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddOwnerForm extends Component {
	state = {
		ownerName: ''
	};

	handleNewOwner = event => {
		event.preventDefault();
		this.props.dispatch({ type: 'ADD_OWNER', payload: this.state });
	};

	handleInput = event => {
		this.setState({ owner_name: event.target.value });
	};

	render() {
		console.log(this.state)
		return (
			<form onSubmit={this.handleNewOwner}>
				<input
					placeholder='Owner Name'
					onChange={this.handleInput}
					value={this.state.owner_name}
				/>
				<button type='submit'> Add Owner </button>
			</form>
		);
	}
}

export default connect()(AddOwnerForm);
