import React from 'react';

export default class TodosList extends React.Component {
		constructor(props) {
			super(props);
			

			this.state ={
				error: null

			};
		}

		renderError() {
			if (!this.state.error) { return null; }

			return <div style = ({ color: 'red' })>{{this.state.error}}</div>;
		}

	render(){
		return (
			<form onSubmit={this.handleCreate.bind(this)}>
				<input type="text" placeholder="what do I need to do ?" />
				<button>Create</button>
			</form>
			);
	}

	handleCreate(event ) {
		event.preventDefault();

		const createInput = this.refs.createInput;
		const task = createInput.value;
		const validateInput = this.validateInput(task);

	 validateInput(task) {
	 	if (!task) {
	 		return 'Please enter a task.';

	 	} else if (_.find(this.props.todos, todo => todo.task ===))
	 		return 'task already exists.';

	 	} else {
	 	return null;
		}
	}
}