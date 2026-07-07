import { useReducer } from 'react';
import { Button } from '../../ui/Button';

//*if action is callback
type InitialValue<T> = T | (() => T);

function reducer<T>(state: T, action: T | ((prev: T) => T)): T {
  if (typeof action === 'function') {
    return (action as (prev: T) => T)(state); //? 'as' is TS thing
  }
  return action;
}

function init<T>(initial: InitialValue<T>): T {
  if (typeof initial === 'function') {
    return (initial as () => T)();
  }
  return initial;
}
//*this custom hook is just a wrapper around 'useReducer' that hides actions.
const useStateCustom = <T,>(initialValue: InitialValue<T>) => {
  //? 'T,' is fucking crazy
  const [state, dispatch] = useReducer(reducer<T>, initialValue, init<T>); //*initialValue - first render only
  return [state, dispatch] as const; //* TS thing. 'this is a fixed tuple, not a random array'
};

export const ReducerStateLogic = () => {
  //*this custom hook is just a wrapper around 'useReducer' that hides actions.
  const [count, setCount] = useStateCustom(0);

  //!Expensive computation
  useStateCustom(() => {
    return Array(100).fill(0);
  });

  return (
    <div className="flex flex-col gap-1 justify-self-center">
      <p className="text-center">Count: {count}</p>

      <div className="flex gap-1">
        <Button onClick={() => setCount(count - 1)}>-</Button>
        <Button onClick={() => setCount(count + 1)}>+</Button>
        <Button onClick={() => setCount(0)}>reset</Button>
      </div>
    </div>
  );
};

/*const [state, dispatch] = useReducer(...);
React gives you dispatch.

Then you either:
return [state, dispatch];

or
const setState = (value) => dispatch(value);
return [state, setState]; 

The second version is just giving the remote a new label.
*/
