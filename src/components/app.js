import React, { Component } from 'react';

import List from '../containers/list';
import AddTaskForm from '../containers/add_task_form';

export default class App extends Component {
  render() {
    return (
      <div>
      	<AddTaskForm />
      	<List />
      </div>
    );
  }
}
