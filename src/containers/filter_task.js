import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterTask } from '../actions/index';
import { bindActionCreators } from 'redux';

// need to filter tasks by: complete, incomplete, && all
// onClick


export default class FilterTask extends Component {
	constructor(props) {
		super(props);

		// this.state = {task: ''};
		// this.onInputChange = this.onInputChange.bind(this);
		// this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event){
		// console.log(event.target.value);
		// this.setState({task: event.target.value});
	}

	onFormSubmit(event){
		// event.preventDefault();
		// add task to List
		// this.props.addTask(this.state.task);
		// this.setState({task: ''});
	}

	render(){
		return (
			  	<div className="filter-task">
			  		<ul>
			  			<li>ALL</li>
			  			<li>COMPLETE</li>
			  			<li>INCOMPLETE</li>
			  		</ul>
			    </div>
		);
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({filterTask: filterTask}, dispatch);
}

export default connect(null, mapDispatchToProps)(FilterTask);