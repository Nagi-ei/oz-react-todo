import { useRef } from 'react';
import Button from './button';

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
    <form
      onSubmit={handleSubmit}
      className='flex items-center w-full py-4 border-b'
    >
      <input
        type='text'
        ref={newRef}
        placeholder='Write a todo...'
        className='bg-neutral-800 px-4 py-1.5 flex-grow mr-1 rounded-md h-10'
      />
      <Button type='submit'>Add</Button>
    </form>
  );
}
