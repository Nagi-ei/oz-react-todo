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
    <main className='flex flex-col items-center justify-between w-screen h-screen p-10 text-neutral-200 bg-neutral-900'>
      <div className='flex flex-col items-center w-full gap-5'>
        <div className='flex justify-between w-full'>
          <Clock />
          <Timer />
        </div>
        <Stopwatch />
      </div>
      <div className='flex flex-col items-center w-3/4 min-w-96'>
        <h1 className='my-5 text-5xl'>TODO</h1>
        <TodoInput
          todoList={todoList}
          setTodoList={setTodoList}
          DB_URL={DB_URL}
        />
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
