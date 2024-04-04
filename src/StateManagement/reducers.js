// rootReducer.js
import { ADD_TODO, INIT_TODO, DELETE_TASK } from './actionTypes';

const initialState = {
  todos: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_TODO:
      return {
        ...state,
        todos: action.payload,
      };
    case ADD_TODO:
      const newTodos = [...state.todos, action.payload];
      localStorage.setItem('todos', JSON.stringify(newTodos));
      return {
        ...state,
        todos: newTodos,
      };
    case DELETE_TASK:
      const updatedTodos = state.todos.filter((_, index) => index !== action.payload);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return {
        ...state,
        todos: updatedTodos,
      };
    default:
      return state;
  }
};

export default rootReducer;
