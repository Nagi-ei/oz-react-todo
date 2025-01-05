import { useRef } from 'react';

export default function TodoInput({ todoList, setTodoList, DB_URL }) {
  const newRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: `${Date.now()}`,
      name: newRef.current.value,
      isDone: false,
    };
    newRef.current.value = '';

    fetch(DB_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    })
      .then(setTodoList([...todoList, newTodo]))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' ref={newRef} />
      <button type='submit'>Add</button>
    </form>
  );
}
