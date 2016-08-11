import React, { Component } from 'react';


export default class List extends Component {

  render() {
  	const list = [
  		{id: 1, task: "eggs"},
  		{id: 2, task: "bread"},
  		{id: 3, task: "cheese"},
  		{id: 4, task: "milk"}
  	];

  	const task = list.map(item => <li key={item.id}>{item.task}</li>);

    return (
    	<div>
	      <div>To Do:</div>
	      <ul>
	      	{task}
	      </ul>
      </div>
    );
  }
}
