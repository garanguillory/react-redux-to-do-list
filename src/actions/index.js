export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const ADD_SUBTASK = 'ADD_SUBTASK';


let nextTaskId = 0;
export const addTask = (task) => {
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

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    id
  }
}

let nextsubTaskId = 0;
export const addSubTask = (subtaskId, subtask) => {
  return {
    type: ADD_SUBTASK,
    subtask,
    subtaskId
  }
}
