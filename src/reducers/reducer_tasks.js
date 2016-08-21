// State argument is not application state, only the state
// this reducer is responsible for

export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

const monthNames = [
  "January", "February", "March",
  "April", "May", "June", "July",
  "August", "September", "October",
  "November", "December"
];

const date = new Date();
const day = date.getDate();
const monthIndex = date.getMonth();
const year = date.getFullYear();
const dateFormatted = `${monthNames[monthIndex]} ${day}, ${year}`;

const task = (state = {}, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        id: action.id,
        description: action.task,
        completed: false,
        date: dateFormatted
      }
    case TOGGLE_TASK:
      if (state.id !== action.id) {
        return state
      }
      return {...state, completed: !state.completed}
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
    case DELETE_TASK:
      return state.filter((task) => { 
          return task.id !== action.id
        }
      )
    default:
      return state
  }
}

export default addTasks













