import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

function Timer() {
  const [time, setTime] = useState(dayjs().format('HH:mm:ss'));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs().format('HH:mm:ss'));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p>{time}</p>
    </>
  );
}

export default Timer;
