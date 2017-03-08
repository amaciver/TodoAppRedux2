import { RECEIVE_TODOS } from "../actions/todo_actions.js";
import { RECEIVE_TODO, REMOVE_TODO } from "../actions/todo_actions.js";
import merge from 'lodash/merge';

const todosReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = {};
  switch (action.type) {
    case RECEIVE_TODOS:
      action.todos.forEach ( (todo) => {
        newState[todo.id] = todo;
      });
      return newState;
    case RECEIVE_TODO:
      newState[action.todo.id] = action.todo;
      return merge({}, oldState, newState);
    case REMOVE_TODO:
      newState = merge({}, oldState);
      let key = action.id;
      delete newState[key];
      return newState;
    default:
      return oldState;
  }
};


export default todosReducer;
