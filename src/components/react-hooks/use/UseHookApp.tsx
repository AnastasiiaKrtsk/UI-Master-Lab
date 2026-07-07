import { UseContext } from './Use&Context';
import { UsePromise } from './Use&Promise';

export const useHookApp = () => {
  return (
    <>
      <UsePromise />
      <UseContext />
    </>
  );
};
