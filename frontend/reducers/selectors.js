export const allTodos = (state) => {

  const keys = Object.keys(state.todos);
  const ret = keys.map( (id) => state.todos[id]) ;
  return ret;
};
