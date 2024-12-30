import React from 'react';
import { useRef } from 'react';

export default function TodoInput({ todoList, setTodoList }) {
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([
      ...todoList,
      { id: Date.now(), name: ref.current.value, isDone: false },
    ]);
    ref.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' ref={ref} />
      <button type='submit'>Add</button>
    </form>
  );
}
