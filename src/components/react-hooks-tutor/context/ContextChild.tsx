import { useContextCustom } from './Context';

export const ContextChild = () => {
  const theme = useContextCustom();
  return (
    <>
      <h3 className="text-2xl">ContextChild,</h3>
      <span className="text-sm">context: theme {theme}</span>
    </>
  );
};
