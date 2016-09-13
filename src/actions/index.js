export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const ADD_SUBTASK = 'ADD_SUBTASK';
export const FILTER_TASK = 'FILTER_TASK';


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

export const filterTask = (type) => {
  return {
    type: FILTER_TASK,
    type
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
