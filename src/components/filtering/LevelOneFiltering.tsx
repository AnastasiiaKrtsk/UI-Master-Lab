import { useState } from 'react';
import { AppInput } from '../ui/Input';

export const LevelOneFiltering = () => {
  const [items] = useState([
    { id: 1, name: 'John' },
    { id: 2, name: 'Alice' },
    { id: 3, name: 'Bob' },
  ]);
  const [query, setQuery] = useState('');
  const filtered = items.filter((el) =>
    el.name.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <div>
      <AppInput
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <ul>
        {filtered.map((el) => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    </div>
  );
};
