import React from 'react';
import { useRef } from 'react';

export default function Todo({ todo, setTodoList }) {
  const editRef = useRef();

  const handleChange = () => {
    setTodoList((prev) =>
      prev.map((li) =>
        li.id === todo.id ? { ...todo, isDone: !todo.isDone } : li
      )
    );
  };

  const handleEdit = () => {};

  const handleDelete = () => {
    setTodoList((prev) => prev.filter((li) => li.id !== todo.id));
  };

  return (
    <li className={`todo ${todo.isDone ? 'done' : ''}`}>
      <label>
        <input type='checkbox' onChange={handleChange} /> {todo.name}
      </label>
      <input type='text' ref={editRef} />
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>X</button>
    </li>
  );
}
