import React from 'react';
import TodoItem from './TodoItem';

const TodosList = (prop) => (
  <ul>
    {prop.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleChangeProps={prop.handleChangeProps}
        deleteTodoProps={prop.deleteTodoProps}
        setUpdate={prop.setUpdate}
      />
    ))}
  </ul>
);

export default TodosList;
