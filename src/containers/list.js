import React, { Component } from 'react';
import { connect } from 'react-redux';


class List extends Component {
  renderList() {
    return this.props.tasks.map((task) => {
      return (
        <li
          key={task.id}
          className="list-group-item">
          {task.description}
        	<i className="fa fa-check pull-right" aria-hidden="true"></i>
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-xs-12 task-list">
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

export default connect(mapStateToProps)(List)



