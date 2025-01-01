import React, { useState, useEffect } from 'react';

export default function useFetchGet({ url, setData, deps }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(() => true);
    fetch(url)
      .then((res) => res.json())
      .then((jsonedData) => setData(jsonedData))
      .catch((err) => setError(err))
      .finally(setIsLoading(() => false));
  }, deps);

  return [isLoading, error];
}
