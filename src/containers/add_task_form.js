import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTask} from '../actions/index';

class AddTaskForm extends Component {
	constructor(props) {
		super(props);

		this.state = {task: ''};
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event){
		console.log(event.target.value);
		this.setState({task: event.target.value});
	}

	onFormSubmit(event){
		event.preventDefault();
		// add task to to-do list (List)
		this.props.addTask(this.state.task);
		this.setState({task: ''});
	}

	render(){
		return (
			  	<div className="add-task-form">
			  		<form onSubmit={this.onFormSubmit} className="input-group">
			  			<input 
			  				placeholder="Add task here..."
			  				className="form-control"
			  				value={this.state.task}
			  				onChange={this.onInputChange} />
			  			<span className="input-group-btn">
			  				<button type="submit" className="btn btn-secondary">Add</button>
			  			</span>
			  		</form>
			    </div>
		);
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({addTask: addTask}, dispatch);
}

export default connect(null, mapDispatchToProps)(AddTaskForm);










