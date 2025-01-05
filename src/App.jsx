import { useState } from 'react';
import './App.css';
import TodoInput from './components/todo-input';
import TodoList from './components/todo-list';
import Quote from './components/quote';
import useFetch from './hooks/use-fetch';
import useFetchGet from './hooks/use-fetch-get';
import Clock from './components/clock';
import Timer from './components/timer';
import Stopwatch from './components/stopwatch';

const DB_URL = 'http://localhost:3000/todo';

export default function App() {
  const [todoList, setTodoList] = useState([]);

  // 상태는 여기서 관리해야함. useFetch에서 관리하는건 말이 안된다. 그냥 props로 다 넘겨줘서 할것
  // 아 근데 useEffect에서 하던데 이유 찾아볼것
  const [isLoading, error] = useFetchGet({
    url: DB_URL,
    setData: setTodoList,
    deps: [todoList],
  });

  // const [todoList, setTodoList, error] = useFetchGet({ url: DB_URL, deps: [] });

  return (
    <main>
      <Clock />
      <Timer />
      <Stopwatch />
      <div>
        <h1>TODO</h1>
        <TodoInput
          todoList={todoList}
          setTodoList={setTodoList}
          DB_URL={DB_URL}
        />
        <hr />
        <TodoList
          todoList={todoList}
          setTodoList={setTodoList}
          DB_URL={DB_URL}
        />
      </div>
      <Quote />
    </main>
  );
}
