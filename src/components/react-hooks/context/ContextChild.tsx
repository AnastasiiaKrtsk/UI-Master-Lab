import { Button } from '../../ui/Button';
import { useContextCustom } from './Context';

export const ContextChild = () => {
  const { theme, toggleTheme } = useContextCustom();
  return (
    <>
      <h3 className="text-2xl">ContextChild,</h3>
      <span className="text-sm">context: {theme}</span>
      <Button onClick={toggleTheme}>toggle</Button>
    </>
  );
};
