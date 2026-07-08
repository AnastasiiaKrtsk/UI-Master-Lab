import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './app/App.tsx';
import { BrowserRouter } from 'react-router-dom';
export const promise = new Promise((_, reject) => {
  reject('It broke');
});

promise
  .then(console.log)
  .catch((error) => console.log('Fuck its broken!', error));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/UI-Master-Lab/">{/* <App /> */}</BrowserRouter>
  </StrictMode>,
);
