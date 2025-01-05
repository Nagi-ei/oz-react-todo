import React, { useState } from 'react';
import { useEffect } from 'react';
import useFetchGet from '../hooks/use-fetch-get';

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
    <div className='quote'>
      {error ? (
        <div>
          <p>{error.name}</p>
          <p>: {error.message}</p>
          <p>Try again! 🥲</p>
        </div>
      ) : (
        <div>
          <p>{quote?.quote}</p>
          <p>{quote?.author}</p>
        </div>
      )}
      <button onClick={handleClick}>Want more?</button>
    </div>
  );
}
