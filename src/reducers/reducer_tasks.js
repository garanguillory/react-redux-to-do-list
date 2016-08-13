// State argument is not application state, only the state
// this reducer is responsible for

// id, description, completed


const task = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TASK':
    console.log('action: ', action);
      return {
        id: action.id,
        description: action.task,
        completed: false
      }

    default:
      return state
  }
}

const addTasks = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, task(undefined, action)]
    default:
      return state
  }
}

export default addTasks













