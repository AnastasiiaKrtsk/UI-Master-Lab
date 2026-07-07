import { useRef, useState } from 'react';
import { Button } from '../../ui/Button';

export function UseRefTime() {
  const [time, setTime] = useState(0);

  //?TS ref
  const ref = useRef<number | null>(null);

  const start = () => {
    ref.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const stop = () => {
    //?CHECK for TS
    if (ref.current !== null) {
      clearInterval(ref.current);
      ref.current = null;
    }
  };

  return (
    <>
      <p>{time}</p>
      <div>
        <Button onClick={start}>Start</Button>
        <Button onClick={stop}>Stop</Button>
      </div>
    </>
  );
}
