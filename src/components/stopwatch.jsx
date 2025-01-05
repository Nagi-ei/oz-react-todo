import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Stopwatch() {
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [cs, setCs] = useState(0);
  const [isTicking, setIsTicking] = useState(false);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    if (isTicking) {
      if (cs === 99) {
        setTimeout(() => {
          setSec((prev) => prev + 1);
          setCs(0);
        }, 10);
        if (sec === 59) {
          setTimeout(() => {
            setMin((prev) => prev + 1);
            setSec(0);
          }, 10);
        }
      }
      setTimeout(() => setCs((prev) => prev + 1), 10);
    }
  }, [isTicking, cs]);

  const handleReset = () => {
    if (isTicking) {
      // Lap
      setLaps((prev) => [
        ...prev,
        `${min < 10 ? `0${min}` : min} : ${sec < 10 ? `0${sec}` : sec} . ${
          cs < 10 ? `0${cs}` : cs
        }`,
      ]);
    } else {
      setCs(0);
      setSec(0);
      setMin(0);
      setLaps([]);
    }
  };

  const handleStart = () => {
    setIsTicking((prev) => !prev);
  };

  return (
    <div>
      <span>
        {min < 10 ? `0${min}` : min} : {sec < 10 ? `0${sec}` : sec} .{' '}
        {cs < 10 ? `0${cs}` : cs}
      </span>
      <button onClick={handleReset}>{isTicking ? 'Lap' : 'Reset'}</button>
      <button onClick={handleStart}>{isTicking ? 'Stop' : 'Start'}</button>
      {laps.map((lap) => (
        <p key={laps.indexOf(lap)}>{lap}</p>
      ))}
    </div>
  );
}
