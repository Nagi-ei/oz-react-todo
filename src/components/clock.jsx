import dayjs from 'dayjs';
import React from 'react';
import { useState, useEffect } from 'react';

export default function Clock() {
  const [now, setNow] = useState(dayjs());

  useEffect(() => {
    setTimeout(() => setNow(dayjs()), 1000);
  }, [now]);

  return (
    <p>
      {now.hour() < 12 ? '오전' : '오후'} ⏰ {now.format('hh:mm:ss')} ⏰
    </p>
  );
}
