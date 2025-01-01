import React, { useState, useEffect } from 'react';

export default function useFetch({
  url,
  data,
  setData,
  deps,
  onlyGet = false,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(() => true);
    fetch(url)
      .then((res) => res.json())
      .then((jsonedData) => setData(jsonedData))
      .catch((err) => setError(err))
      .finally(setIsLoading(() => false));
    return () => {
      if (!onlyGet) {
        fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((jsoned) => console.log(jsoned))
          .catch((err) => setError(err));
      }
    };
  }, deps);

  return [isLoading, error];
}
