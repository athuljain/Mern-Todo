import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function TodoHome() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [error, setError] = useState(null); // State to hold error information

  // Fetch all todos from the backend when the component mounts
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:8080/todo'); // Updated endpoint
      setTodos(response.data);
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error('Error fetching todos:', error);
      setError('Failed to fetch todos. Please try again later.'); // Set error message
    }
  };

  const handleCreateTodo = async () => {
    try {
      const response = await axios.post('http://localhost:8080/todo', { todo: newTodo }); // Updated endpoint
      setTodos([...todos, response.data]);
      setNewTodo('');
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error('Error creating todo:', error);
      setError('Failed to create todo. Please try again later.'); // Set error message
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/todo/${id}`); // Updated endpoint
      setTodos(todos.filter(todo => todo._id !== id));
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error('Error deleting todo:', error);
      setError('Failed to delete todo. Please try again later.'); // Set error message
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
      <input 
        type="text" 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)} 
        placeholder="Enter todo..." 
      />
      <button onClick={handleCreateTodo}>Add Todo</button>

      <ul>
        {todos.map(todo => (
          <li key={todo._id}>
            {todo.todo}
            <button onClick={() => handleDeleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
