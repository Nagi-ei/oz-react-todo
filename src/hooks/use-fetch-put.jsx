import React, { useState, useEffect } from 'react';

export default function useFetchGet({ url, deps, originalData = null }) {
  const [data, setData] = useState(originalData);
  const [error, setError] = useState();

  useEffect(() => {
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((jsoned) => setData(jsoned))
      .catch((err) => setError(err));
  }, deps);

  return [data, setData, error];
}
