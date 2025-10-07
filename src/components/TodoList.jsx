import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, filter, onToggle, onDelete }) {
  const filteredTodos = () => {
    switch (filter) {
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  return (
    <ul className="todo-list">
      {filteredTodos().map((todo) => (
        <TodoItem
          key={todo.id} 
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;