import { useReducer } from 'react';
import { Button } from '../../ui/Button';

type State = {
  isOpen: boolean;
  text: string;
};

type Action =
  | { type: 'TOGGLE' }
  | { type: 'SET_TEXT'; payload: string }
  | { type: 'RESET' };

const initialState: State = {
  isOpen: false,
  text: '',
};

function reducer(state: State, action: Action): State {
  // TODO
  switch (action.type) {
    case 'TOGGLE':
      return {
        ...state,
        isOpen: !state.isOpen,
        text: !state.isOpen ? 'Open' : '',
      };

    case 'SET_TEXT':
      return {
        ...state,
        text: action.payload,
      };

    case 'RESET':
      return initialState;

    default:
      return state;
  }
}

export const ReduserTest = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="flex flex-col gap-1">
      <span className="text-center mb-3">
        {state.isOpen ? state.text : 'CLOSED FOR NOW'}
      </span>
      <div className="flex gap-1 justify-between">
        <Button onClick={() => dispatch({ type: 'TOGGLE' })}>TOGGLE</Button>
        <Button
          onClick={() =>
            dispatch({
              type: 'SET_TEXT',
              payload: 'Set Text To ASHES',
            })
          }
        >
          SET_TEXT
        </Button>
        <Button onClick={() => dispatch({ type: 'RESET' })}>RESET</Button>
      </div>
    </div>
  );
};
