import { useEffect, useState } from 'react';
import { Button } from '../../ui/Button';

//TODO=================================NoDependency
export const NoDependency = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect ran');
  }); //?RUNS EVERY RENDER

  return (
    <>
      <h1 className="text-2xl">NoDependency</h1>
      <Button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Change
      </Button>
      <p>{count}</p>
    </>
  );
};

//TODO=================================EmptyDependency
export const EmptyDependency = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect ran once');
  }, []); //?RUNS ONCE

  return (
    <>
      <h1 className="text-2xl mt-4">EmptyDependency</h1>
      <Button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Change
      </Button>
      <p>{count}</p>
    </>
  );
};

//TODO=================================SetDependency
export const SetDependency = () => {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log('Effect on count changing run');
  }, [count]); //?RUNS FIRST RENDER AND THEN ONLY WHEN COUNTER CHANGES

  return (
    <>
      <h1 className="text-2xl mt-4">SetDependency</h1>
      <div>
        <p>{count}</p>
        <Button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          Change Count
        </Button>
      </div>

      <div>
        <p>{time}</p>
        <Button
          onClick={() => {
            setTime((prev) => prev + 1);
          }}
        >
          Change userName
        </Button>
      </div>
    </>
  );
};

//TODO=================================CleanUp
//?to properly clean we shoud unmount WHOLE COMPONENT
export const CleanUpApp = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <h1 className="text-2xl mt-4">CleanUp</h1>
      <Button onClick={() => setShow(!show)}>Toggle Component</Button>
      {show && <CleanUp />}//?UNMOUNTING
    </>
  );
};
const CleanUp = () => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <>
      <p>{time}</p>
    </>
  );
};
