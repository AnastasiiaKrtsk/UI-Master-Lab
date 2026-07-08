import { useEffect, useState } from 'react';
const url = 'https://pokeapi.co/api/v2/pokemon';

type Pokemon = {
  name: string;
  url: string;
};

export const PromisesApp = () => {
  const [data, setData] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadUsers() {
      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error('Failed fetch!');
        }

        const data = await res.json();
        setData(data.results);
      } catch {
        setError('Something went wrong');
      } finally {
        setLoading(false);
      }
    }
    loadUsers();
  }, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      <ul>
        {data.map((el) => (
          <li key={el.name}>{el.name}</li>
        ))}
      </ul>
    </>
  );
};
