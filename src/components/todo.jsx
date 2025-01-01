import { useRef, useState } from 'react';

export default function Todo({ todo, setTodoList, DB_URL }) {
  const editRef = useRef();
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = () => {
    // setTodoList((prev) =>
    //   prev.map((li) =>
    //     li.id === todo.id ? { ...todo, isDone: !todo.isDone } : li
    //   )
    // );

    fetch(`${DB_URL}/${todo.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isDone: !todo.isDone }),
    });
    // .catch((err) => console.log(err));
  };

  const handleEdit = () => {
    setIsEditing((prev) => !prev);
    if (isEditing) {
      // setTodoList((prev) =>
      //   prev.map((li) =>
      //     li.id === todo.id ? { ...todo, name: editRef.current.value } : li
      //   )
      // );

      fetch(`${DB_URL}/${todo.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: editRef.current.value }),
      });
      // .catch((err) => console.log(err));
    }
  };

  const handleDelete = () => {
    // setTodoList((prev) => prev.filter((li) => li.id !== todo.id));

    fetch(`${DB_URL}/${todo.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // .catch((err) => console.log(err));
  };

  return (
    <li className={`todo ${todo.isDone ? 'done' : ''}`}>
      <label>
        <input type='checkbox' checked={todo.isDone} onChange={handleChange} />{' '}
        {isEditing ? '' : todo.name}
      </label>
      {isEditing && <input type='text' ref={editRef} />}
      <button onClick={handleEdit}>{isEditing ? 'Done' : 'Edit'}</button>
      <button onClick={handleDelete}>X</button>
    </li>
  );
}
