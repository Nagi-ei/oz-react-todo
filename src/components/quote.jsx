import React, { useState } from 'react';
import { useEffect } from 'react';
import useFetchGet from '../hooks/use-fetch-get';
import Button from './button';

const URL = 'https://quoteslate.vercel.app/api/quotes/random';

export default function Quote() {
  const [quote, setQuote] = useState();
  const [error, setError] = useState();
  const [renew, setRenew] = useState(Date.now());
  // const [isLoading, error] = useFetchGet({
  //   url: URL,
  //   setData: setQuote,
  //   deps: [renew],
  // });

  const handleClick = () => {
    setRenew(() => Date.now());
    console.log(renew);
  };

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((jsonedData) => setQuote(jsonedData))
      .catch((err) => setError(err));
  }, [renew]);

  return (
    <div className='flex items-end justify-between w-full'>
      {error ? (
        <div>
          <p>{error.name}</p>
          <p>: {error.message}</p>
          <p>Try again! 🥲</p>
        </div>
      ) : (
        <div className='flex flex-col justify-between'>
          <p>{quote?.quote}</p>
          <p className='text-zinc-500'>- {quote?.author} -</p>
        </div>
      )}
      <Button
        onClick={handleClick}
        moreClass='w-[75px] h-[75px] grow-0 flex flex-col justify-center items-center'
      >
        Want <br /> more?
      </Button>
    </div>
  );
}
