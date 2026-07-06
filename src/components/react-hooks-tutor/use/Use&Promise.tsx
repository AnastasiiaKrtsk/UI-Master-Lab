import { use } from 'react';

const userPromise = Promise.resolve({
  name: 'John',
});

export function UsePromise() {
  const user = use(userPromise);
  return <div>{user.name}</div>;
}
