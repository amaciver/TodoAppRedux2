import React from 'react';


const TodoDetailView = ({id, body, steps, deleteTodo}) => (
  <div>
    <button onClick={() => deleteTodo(id)}>Remove</button>
    {body}
    {steps}
  </div>
);

export default TodoDetailView;
