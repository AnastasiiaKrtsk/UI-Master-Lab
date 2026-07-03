import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClick?: () => void;
};

export const Button = ({ children, onClick }: Props) => {
  return (
    <button
      className=" bg-violet-700 py-1 px-3 hover:bg-violet-600 hover:cursor-pointer rounded-sm"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
