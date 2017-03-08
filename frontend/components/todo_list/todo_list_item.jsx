import React from 'react';
import TodoDetailViewContainer from './todo_detail_view_container';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.todo.title,
      id: props.todo.id,
      body: props.todo.body,
      done: props.todo.done,
      detail: false
    };
      this.handleToggle = this.handleToggle.bind(this);
      this.handleDetail = this.handleDetail.bind(this);
  }

  handleToggle() {
    return this.props.updateTodo({
      id: this.state.id,
      title: this.state.title,
      body: this.state.body,
      done: !this.state.done
    })
    .then(() => this.setState({done: !this.state.done}));
  }

  handleDetail() {
    console.log("HELLO");
    return this.setState({detail: !this.state.detail});
  }

  render() {
    let detail = "";
    if (this.state.detail) {
      detail = <TodoDetailViewContainer id={this.state.id} body={this.state.body} />;
    }
    return(
      <div>
        <li><a onClick={ this.handleDetail }>{ this.state.title }</a></li>

        <button  onClick={ this.handleToggle }>
            Make it { (!this.state.done).toString()}
        </button>

        {detail}
      </div>
    );

  }
}
export default TodoListItem;

// <button key={todo.id} onClick={() => removeTodo(todo.id)}>Remove</button>
