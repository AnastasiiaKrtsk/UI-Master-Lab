import { Reducer } from './Reducer';
import { ReducerNextLevel } from './ReducerNextLevel';
import { ReducerStateLogic } from './ReducerStateLogic';
import { ReduserTest } from './ReduserTest';

export const ReducerHookApp = () => {
  return (
    <>
      <Reducer />
      <ReducerNextLevel />
      <ReducerStateLogic />
      <ReduserTest />
    </>
  );
};
