import { useRef, useState } from 'react';

export default function Todo({ todo, setTodoList }) {
  const editRef = useRef();
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = () => {
    setTodoList((prev) =>
      prev.map((li) =>
        li.id === todo.id ? { ...todo, isDone: !todo.isDone } : li
      )
    );
  };

  const handleEdit = () => {
    setIsEditing((prev) => !prev);
    if (isEditing) {
      setTodoList((prev) =>
        prev.map((li) =>
          li.id === todo.id ? { ...todo, name: editRef.current.value } : li
        )
      );
    }
  };

  const handleDelete = () => {
    setTodoList((prev) => prev.filter((li) => li.id !== todo.id));
  };

  return (
    <li className={`todo ${todo.isDone ? 'done' : ''}`}>
      <label>
        <input type='checkbox' onChange={handleChange} />{' '}
        {isEditing ? '' : todo.name}
      </label>
      {isEditing && <input type='text' ref={editRef} />}
      <button onClick={handleEdit}>{isEditing ? 'Done' : 'Edit'}</button>
      <button onClick={handleDelete}>X</button>
    </li>
  );
}
