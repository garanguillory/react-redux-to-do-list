import React, { Component } from 'react';
import { connect } from 'react-redux';


class List extends Component {
  /*
    constructor(props) {
      super(props);

      this.state = {task: ''};
      this.onInputChange = this.onInputChange.bind(this);
      this.onFormSubmit = this.onFormSubmit.bind(this);
    }
  */
  // add an onClick event handler
  // add completeTask && deleteTask actions


  renderList() {
    return this.props.tasks.map((task) => {
      return (
        <li
          key={task.id}
          className="list-group-item">
          {task.description}
          <i 
            className="fa fa-times pull-right" 
            aria-hidden="true"
            // onClick={() => this.props.deleteTask(task)}
            >
          </i>
        	<i 
            className="fa fa-check pull-right" 
            aria-hidden="true"
            // onClick={() => this.props.completeTask(task)}
            >
          </i>
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



