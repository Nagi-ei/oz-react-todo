import Todo from './todo';

export default function TodoList({ todoList, setTodoList, DB_URL }) {
  return (
    <ul className='w-full py-4'>
      {todoList?.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          setTodoList={setTodoList}
          DB_URL={DB_URL}
        />
      ))}
    </ul>
  );
}
