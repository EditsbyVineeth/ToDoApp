// actionTypes.js
export const ADD_TODO = 'ADD_TODO';
export const INIT_TODO = 'INIT_TODO'; 
export const DELETE_TASK = 'DELETE_TASK';


// actions.js
// import { ADD_TODO, INIT_TODO } from './actionTypes';

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const initTodo = (todos) => ({ // Action creator to initialize tasks from local storage
  type: INIT_TODO,
  payload: todos,
});

export const deleteTask = (index) => {
  return {
    type: DELETE_TASK,
    payload: index,
  };
};
