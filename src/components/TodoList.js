import React, { useState, useCallback } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = useCallback(() => {
    setTodos((prevTodos) => [...prevTodos, '']);
  }, []);

  const handleRemoveTodo = useCallback((index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  }, []);

  const handleEditTodo = useCallback((index, updatedTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) => (i === index ? updatedTodo : todo))
    );
  }, []);

  return (
    <div>
      <button onClick={handleAddTodo}>Dodaj zadanie</button>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="text"
              value={todo}
              onChange={(e) => handleEditTodo(index, e.target.value)}
            />
            <button onClick={() => handleRemoveTodo(index)}>Usuń</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
