import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const URL = 'https://quoteslate.vercel.app/api/quotes/random';

export default function Quote() {
  const [quote, setQuote] = useState({ quote: 'asdf', author: 'me' });
  const [error, setError] = useState(null);
  const [renew, setRenew] = useState(true);

  const handleClick = () => {
    setRenew((prev) => !prev);
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
          <p>{quote.quote}</p>
          <p>{quote.author}</p>
        </div>
      )}
      <button onClick={handleClick}>Want more?</button>
    </div>
  );
}
