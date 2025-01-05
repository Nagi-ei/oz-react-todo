import React, { useState, useEffect } from 'react';

export default function useFetchGet(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((jsonedData) => setData(jsonedData))
      .catch((err) => {
        setError(err);
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, [url]);

  return [data, isLoading, error];
}
