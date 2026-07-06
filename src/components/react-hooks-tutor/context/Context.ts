import { createContext, useContext } from 'react';

type ThemeContextType = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

//?Context contains no state.
export const ThemeContext = createContext<ThemeContextType | null>(null);

//?also can create custom hook
export function useContextCustom() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('ThemeContext missing Provider');
  }
  return ctx;
}
