import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Timer() {
  const [time, setTime] = useState(1);
  const [isTicking, setIsTicking] = useState(false);
  const [second, setSecond] = useState();

  const handleChange = (e) => {
    setTime(e.target.value);
  };

  const handleClick = () => {
    setIsTicking((prev) => !prev);
    setSecond(0); // 이전에 0초에서 정지했으면 시작이 안됨
  };

  useEffect(() => {
    if (isTicking) {
      if (time === 0 && second === 0) {
        setIsTicking(false);
        setSecond(null);
      }
      if (second <= 0 && time > 0) {
        setTimeout(() => {
          setSecond(59);
          setTime((prev) => prev - 1);
        }, 1000);
      }
      if (second !== 0 && time >= 0) {
        setTimeout(() => setSecond((prev) => prev - 1), 1000);
      }
    }
  }, [second]);

  return (
    <div>
      {isTicking ? (
        <span>
          {time}:{second < 10 ? `0${second}` : second}
        </span>
      ) : (
        <>
          <span>{time} mins </span>
          <input
            type='range'
            min={1}
            max={60}
            value={time}
            onChange={handleChange}
          />
        </>
      )}
      <button onClick={handleClick}> {isTicking ? 'Cancel' : 'Set'}</button>
    </div>
  );
}
