import {connect} from 'react-redux';
import TodoList from './todo_list.jsx';
import { allTodos } from '../../reducers/selectors.js';
import { fetchTodos, createTodo, updateTodo }
  from '../../actions/todo_actions';

const mapStateToProps = (state) => ({
  todos: allTodos(state),
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  updateTodo: (todo) => dispatch(updateTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: (todo) => dispatch(createTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
