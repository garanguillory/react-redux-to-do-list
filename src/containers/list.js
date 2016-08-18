import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTask, deleteTask } from '../actions/index';
import { bindActionCreators } from 'redux';

class List extends Component {

  renderList() {
    return this.props.tasks.map((task) => {
      return (
        <li
          key={task.id}
          className="list-group-item">
          <span style={task.completed ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}>{task.description}</span>
          <i 
            className="fa fa-times pull-right" 
            aria-hidden="true"
            onClick={() => this.props.deleteTask(task.id)}
            >
          </i>
        	<i 
            className="fa fa-check pull-right" 
            aria-hidden="true"
            onClick={() => this.props.toggleTask(task.id)}
            >
          </i>
        </li>
      );
    });
  }

  render() {
    return (
      <ul style={this.props.tasks.length ? {display: 'inline-block'} : {display: 'none'}} className="col-xs-12 task-list">
        {this.renderList()}
      </ul>
    )
  }
}


function mapStateToProps(state){
	// whatever is returned from 'mapStateToProps'
	// will show up as props inside of List
	// we need access to 'this.props.tasks'
	return {
    tasks: state.tasks
	}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({toggleTask: toggleTask, deleteTask: deleteTask}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(List)



