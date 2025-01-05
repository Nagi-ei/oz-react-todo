import { useRef, useState } from 'react';
import Button from './button';

export default function Todo({ todo, setTodoList, DB_URL }) {
  const editRef = useRef();
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = () => {
    fetch(`${DB_URL}/${todo.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isDone: !todo.isDone }),
    })
      .then(
        setTodoList((prev) =>
          prev.map((li) =>
            li.id === todo.id ? { ...todo, isDone: !todo.isDone } : li
          )
        )
      )
      .catch((err) => console.log(err));
  };

  const handleEdit = () => {
    setIsEditing((prev) => !prev);
    if (isEditing) {
      fetch(`${DB_URL}/${todo.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: editRef.current.value }),
      })
        .then(
          setTodoList((prev) =>
            prev.map((li) =>
              li.id === todo.id ? { ...todo, name: editRef.current.value } : li
            )
          )
        )
        .catch((err) => console.log(err));
    } else {
      // 수정할 input이 렌더링되고 난뒤에 실행해야해서 비동기로 넘겨줌
      setTimeout(() => {
        editRef.current.focus();
      }, 0);
    }
  };

  const handleDelete = () => {
    fetch(`${DB_URL}/${todo.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(setTodoList((prev) => prev.filter((li) => li.id !== todo.id)))
      .catch((err) => console.log(err));
  };

  return (
    <li
      className={`flex justify-between items-center ${
        todo.isDone ? 'done' : ''
      }`}
    >
      <label className='grow'>
        <input
          type='checkbox'
          checked={todo.isDone}
          onChange={handleChange}
          className='mr-4'
        />
        {!isEditing && todo.name}
      </label>
      {isEditing && (
        <input
          type='text'
          ref={editRef}
          className='bg-neutral-800 px-4 py-1.5 grow-[100] mr-1 rounded-md h-10'
        />
      )}
      <Button onClick={handleEdit}>{isEditing ? 'Done' : 'Edit'}</Button>
      <Button onClick={handleDelete}>X</Button>
    </li>
  );
}
