import React, { Component } from 'react';
import AddToDo from './component.add_to_do';
import List from './component.to_do_list.js';

export default class App extends Component {

  render() {

    return (
    	<div>
    		<AddToDo />
	      <List />
      </div>
    );
  }
}
