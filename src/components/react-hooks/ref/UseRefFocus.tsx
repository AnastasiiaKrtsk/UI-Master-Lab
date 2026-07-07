import { useRef } from 'react';
import { Button } from '../../ui/Button';

export const UseRefFocus = () => {
  //?TS ref
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleInputFocus = () => {
    //?CHECK for TS
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="flex gap-2">
      <input
        className="border px-2 py-1 rounded-sm"
        ref={inputRef}
        type="text"
        placeholder="input"
      />
      <Button onClick={handleInputFocus}>Focus Input</Button>
    </div>
  );
};
