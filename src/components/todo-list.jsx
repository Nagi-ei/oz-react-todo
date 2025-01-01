import Todo from './todo';

export default function TodoList({ todoList, setTodoList, DB_URL }) {
  return (
    <ul>
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
