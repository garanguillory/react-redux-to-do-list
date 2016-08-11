import React, { Component } from 'react';


export default class AddToDo extends Component {

  render() {
  	
    return (
    	<div>
    		<form>
    			<div className="form-group">
		    		<div className="col-xs-8">
		    		  <input className="form-control" type="text" placeholder="Add to-do here..." />
		    		</div>
		    		<div className="col-xs-4">
		    		 	<button className="btn btn-success">Add</button>
		    		</div>
	    		</div>
    		</form>
      </div>
    );
  }
}
