import React from 'react';
import { allTodos } from '../../reducers/selectors.js';
import  TodoListItem  from './todo_list_item.jsx';
import TodoForm from './todo_form.jsx';

class TodoList extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div>
        <ul>
        {this.props.todos.map ( (todo, key) => {
          return <TodoListItem
            key={key}
            todo={todo}
            updateTodo={this.props.updateTodo} />;
        })}
      </ul>
      <TodoForm errors={this.props.errors} createTodo={this.props.createTodo} />
    </div>
    );
  }
}

export default TodoList;
