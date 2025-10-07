import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Belajar React Hooks', completed: false },
    { id: 2, text: 'Buat Aplikasi Todo', completed: true },
  ]);
  const [filter, setFilter] = useState('all');

  
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(), 
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className='max-w-md mx-auto mt-10 p-6 bg-blue-400 rounded-md shadow-md'>
      <h1 className='text-2xl font-bold text-center mx-2 my-2 bg-white rounded-lg shadow-md py-3 mr-3 '>Todo App</h1>
      <TodoForm onAdd={addTodo} />

      <TodoFilter filter={filter} onSetFilter={setFilter} />
      <TodoList
        todos={todos}
        filter={filter}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </div>
  );
}

export default App;