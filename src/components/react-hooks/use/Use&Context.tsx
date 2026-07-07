import { createContext, use, type ReactNode } from 'react';
type Children = {
  children: ReactNode;
};
const ThemeContext = createContext<'light' | 'dark'>('light');

export function UseContext() {
  return (
    <ThemeContext.Provider value="dark">
      <Parent>
        <Child />
      </Parent>
    </ThemeContext.Provider>
  );
}

function Parent({ children }: Children) {
  return (
    <>
      <h1 className="text-3xl">Parent:</h1>
      {children}
    </>
  );
}

function Child() {
  const theme = use(ThemeContext);
  return (
    <>
      <h2 className="text-2xl">Child: {theme}</h2>
    </>
  );
}
