import { useState } from 'react';
import './App.css';
import TodoInput from './components/todo-input';
import TodoList from './components/todo-list';
import Quote from './components/quote';
import Timer from './components/timer';

export default function App() {
  const [todoList, setTodoList] = useState([
    { id: 0, name: '과제', isDone: false },
    { id: 1, name: '잔디 심기', isDone: false },
    { id: 2, name: '2024 마무리', isDone: false },
  ]);

  return (
    <main>
      <Timer />
      <div>
        <h1>TODO</h1>
        <TodoInput todoList={todoList} setTodoList={setTodoList} />
        <hr />
        <TodoList todoList={todoList} setTodoList={setTodoList} />
      </div>
      <Quote />
    </main>
  );
}
