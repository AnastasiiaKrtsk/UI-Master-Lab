import { createContext, useContext } from 'react';

type ThemeContextType = 'light' | 'dark';
export const ThemeContext = createContext<ThemeContextType | null>(null);

//?also can create custom hook
export function useContextCustom() {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error('ThemeContext missing Provider');
  }
  return theme;
}
