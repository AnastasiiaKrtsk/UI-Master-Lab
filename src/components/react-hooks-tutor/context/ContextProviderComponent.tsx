import type { ReactNode } from 'react';
import { ThemeContext } from './Context';

type ContextProviderComponentProps = {
  children: ReactNode;
};

export const ContextProviderComponent = ({
  children,
}: ContextProviderComponentProps) => {
  return (
    <div>
      <h1 className="text-4xl">ContextProviderComponent</h1>
      <div>children here</div>
      <ThemeContext.Provider value={'dark'}>{children}</ThemeContext.Provider>
    </div>
  );
};
