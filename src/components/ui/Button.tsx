import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className=" bg-violet-700 py-1 px-3 hover:bg-violet-600 hover:cursor-pointer rounded-sm"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
