import { useState } from 'react';
import './App.css';
import TodoInput from './components/todo-input';
import TodoList from './components/todo-list';
import Quote from './components/quote';
import Clock from './components/clock';
import Timer from './components/timer';
import Stopwatch from './components/stopwatch';
import useFetch from './hooks/use-fetch';
import useFetchGet from './hooks/use-fetch-get';
import { useEffect } from 'react';

const DB_URL = 'http://localhost:3000/todo';

export default function App() {
  // 데이터를 받아오는건 useEffect, 렌더링에 쓰는건 useState로 역할 나누기
  const [data, isLoading, error] = useFetchGet(DB_URL);
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    data && setTodoList(data);
  }, [data]);

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
