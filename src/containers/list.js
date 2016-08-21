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
          className="list-group-item task-individual">
          <span style={task.completed ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}>
            {task.description}
          </span>
          <span className="task-date">date added: {task.date}</span>
          <ul className="task-functions pull-right">
            <li>
              <i 
                className="fa fa-check" 
                aria-hidden="true"
                onClick={() => this.props.toggleTask(task.id)}
                >
              </i>
            </li>
            <li>
              <i 
                className="fa fa-times" 
                aria-hidden="true"
                onClick={() => this.props.deleteTask(task.id)}
                >
              </i>
            </li>
          </ul>
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

/*

  <ul className="task-functions pull-right">
    <li>
      <span className="task-date">date added: {task.date}</span>
    </li>
    <li>
      <i 
        className="fa fa-check" 
        aria-hidden="true"
        onClick={() => this.props.toggleTask(task.id)}
        >
      </i>
    </li>
    <li>
      <i 
        className="fa fa-times" 
        aria-hidden="true"
        onClick={() => this.props.deleteTask(task.id)}
        >
      </i>
    </li>
  </ul>

*/

