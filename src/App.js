import { useEffect, useState } from 'react';

import { Todo } from './components/Todo';

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState('');
  
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));

    if (todos) {
      setTodos(todos);
    }
  }, []);

  function handleAddTodo() {
    const newTask = {
      id: todos.length,
      name,
      isChecked: false,
    }

    const updatedTodos = [...todos, newTask];

    setName('');
    setTodos(updatedTodos);

    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  }

  function handleUpdateTask(id) {
    const todoIndex = todos.findIndex(todo => todo.id === id);

    if (todoIndex === -1) {
      return;
    }

    const updatedTodos = todos.map((todo, index) => {
      if (index === todoIndex) {
        return {
          ...todo,
          isChecked: !todo.isChecked,
        }
      }

      return todo;
    });

    setTodos(updatedTodos);

    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  }

  function handleDeleteTask(id) {
    const updatedTodos = todos.filter(todo => todo.id !== id);

    setTodos(updatedTodos);

    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  }

  return (
    <div className="App">
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>      
      <button onClick={handleAddTodo}>add</button>

      <div className="tasks">
        {todos.map(todo => (
          <Todo 
            key={todo.id}
            id={todo.id}
            name={todo.name}
            isChecked={todo.isChecked}
            handleUpdateTask={handleUpdateTask}
            handleDeleteTask={handleDeleteTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
