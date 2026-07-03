import { useReducer } from 'react';
import { Button } from '../../ui/Button';

type State = {
  count: number;
};

function init(initialCount: number) {
  return {
    count: initialCount,
  };
}

type Action = { type: 'increment' } | { type: 'decrement' };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export const Reducer = () => {
  const [state, reduceraDispatch] = useReducer(reducer, 0, init); //?lazy loading
  return (
    <div className="flex flex-col justify-self-center gap-1">
      <p className="text-center">Counter: {state.count}</p>
      <div className="flex gap-1">
        <Button onClick={() => reduceraDispatch({ type: 'increment' })}>
          +1
        </Button>
        <Button onClick={() => reduceraDispatch({ type: 'decrement' })}>
          -1
        </Button>
      </div>
    </div>
  );
};
