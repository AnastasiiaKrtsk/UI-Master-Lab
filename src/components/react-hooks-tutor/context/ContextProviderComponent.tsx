import { useState, type ReactNode } from 'react';
import { ThemeContext } from './Context';

type ContextProviderComponentProps = {
  children: ReactNode;
};

//?Provider owns the state, the theme
//!Children never own it.

export const ContextProviderComponent = ({
  children,
}: ContextProviderComponentProps) => {
  //!If the app is huge with logic we write its logic here.
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };
  return (
    <div>
      <h1 className="text-4xl">ContextProviderComponent</h1>
      <div>children here</div>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
};
