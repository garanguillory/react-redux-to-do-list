export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
// id, description, completed

let nextTaskId = 0;
export function addTask(task){
	return {
	  type: ADD_TASK,
	  id: nextTaskId++,
	  task
	};
}

export const toggleTask = (id) => {
  return {
    type: TOGGLE_TASK,
    id
  }
}


