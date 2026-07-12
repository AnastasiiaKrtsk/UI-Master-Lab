import { useState } from 'react';

type Filter = 'all' | 'active' | 'completed';
type Item = {
  id: string;
  text: string;
  completed: boolean;
};

//? Record<Keys, Value>
//?"Create an object whose keys are Filter and whose values are (item: Item) => boolean."
const filters: Record<Filter, (item: Item) => boolean> = {
  all: () => true,
  completed: (item) => item.completed,
  active: (item) => !item.completed,
};

export const LevelTwoFiltering = () => {
  const [items] = useState([
    { id: '1', text: 'Study', completed: true },
    { id: '2', text: 'Workout', completed: false },
  ]);

  //TODO Step 1: Store the selected filter
  const [currentFilter, setCurrentFilter] = useState<Filter>('all');

  //TODO Step 3: Filter based on the selected value
  const filtered = items.filter(filters[currentFilter]);

  return (
    <div>
      {/*//TODO Step 2: Update it when the user changes the 'select' */}
      <select
        value={currentFilter}
        onChange={(e) => {
          setCurrentFilter(e.target.value as Filter);
        }}
      >
        <option value="all">all</option>
        <option value="completed">completed</option>
        <option value="active">active</option>
      </select>
      <ul>
        {filtered.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};
