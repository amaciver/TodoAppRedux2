import * as TodoApiUtil from '../util/todo_api_util';
import { receiveErrors, clearErrors } from './error_actions';
export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo: todo
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id: id
});

export const fetchTodos = () => (dispatch) => (
  TodoApiUtil.fetchTodos().then(todos => dispatch(receiveTodos(todos)))
);

export const createTodo = (todo) => (dispatch) => (
  TodoApiUtil.createTodo(todo)
    .then((newtodo) => dispatch(receiveTodo(newtodo)), err => {
      return dispatch(receiveErrors(err.responseJSON));
    }).then(() => dispatch(clearErrors()))
);

export const updateTodo = (todo) => dispatch => (
  TodoApiUtil.updateTodo(todo)
    .then((todo) => dispatch(receiveTodo(todo)))
);

export const deleteTodo = (id) => dispatch => (
  TodoApiUtil.deleteTodo(id)
    .then((id) => dispatch(removeTodo(id)))
);
