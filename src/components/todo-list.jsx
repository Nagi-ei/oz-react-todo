import React from 'react';

export default function TodoList({ todoList, setTodoList }) {
  const handleEdit = () => {};

  const handleDelete = () => {};

  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id} className='todo'>
          <input type='checkbox' />
          {todo.name}
          <input type='text' />
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>X</button>
        </li>
      ))}
    </ul>
  );
}
