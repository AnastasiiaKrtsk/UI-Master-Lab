import { UseContext } from './use&Context';
import { UsePromise } from './use&Promise';

export const useHookApp = () => {
  return (
    <>
      <UsePromise />
      <UseContext />
    </>
  );
};
