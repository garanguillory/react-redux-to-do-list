export const ADD_TODO = "ADD_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
export const TOGGLE_TODO = "TOGGLE_TODO";

let nextTask = 0

//1. Takes the text from AddTodo field and returns proper “Action” JSON to send to other components.
export const addTodo = (text) => {
 return {
 type: ADD_TODO,
 id: nextTask++,
 text,  //<--ES6. same as text:text, in ES5
 completed: false //<-- initially this is set to false
 }
}
 
//2. Takes filter string and returns proper “Action” JSON object to send to other components.
export const setVisibilityFilter = (filter) => {
 return {
 type: SET_VISIBILITY_FILTER,
 filter
 }
}
 
//3. Takes Todo item’s id and returns proper “Action” JSON object to send to other components.
export const toggleTodo = (id) => {
 return {
 type: TOGGLE_TODO,
 id
 }
}