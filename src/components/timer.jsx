import dayjs from 'dayjs';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function timer() {
  const [now, setNow] = useState(dayjs());

  useEffect(() => {
    const interval = setInterval(() => setNow(dayjs()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, [now]);

  return (
    <div>
      <p>
        {now.hour() < 12 ? '오전' : '오후'} ⏰ {now.format('hh:mm:ss')} ⏰
      </p>
    </div>
  );
}
