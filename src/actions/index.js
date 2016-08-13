// export const ADD_TASK = 'ADD_TASK';
// id, description, completed

let nextTaskId = 0;
export function addTask(task){
	return {
	  type: 'ADD_TASK',
	  id: nextTaskId++,
	  task
	};
}

