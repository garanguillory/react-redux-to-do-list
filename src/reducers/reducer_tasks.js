// State argument is not application state, only the state
// this reducer is responsible for

// id, description, completed
export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK'; 

const task = (state = {}, action) => {
  switch (action.type) {
    case ADD_TASK:
    console.log('action: ', action);
      return {
        id: action.id,
        description: action.task,
        completed: false
      }
    case TOGGLE_TASK:
    console.log('action.id: ', action.id);
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })
    default:
      return state
  }
}

const addTasks = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, task(undefined, action)]
    case TOGGLE_TASK:
      return state.map(t =>
        task(t, action)
      )
    default:
      return state
  }
}

export default addTasks













