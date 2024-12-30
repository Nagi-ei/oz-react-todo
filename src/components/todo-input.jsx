import { useRef } from 'react';

export default function TodoInput({ todoList, setTodoList }) {
  const newRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([
      ...todoList,
      { id: Date.now(), name: newRef.current.value, isDone: false },
    ]);
    newRef.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' ref={newRef} />
      <button type='submit'>Add</button>
    </form>
  );
}
