import { useState } from 'react';
import { Select } from '../../ui/Select';
import { AppInput } from '../../ui/Input';

type User = {
  id: number;
  name: string;
  age: number;
  city: string;
  active: boolean;
};
type Sorter = 'az' | 'za' | 'youngest' | 'oldest' | 'city';
type Filter = 'all' | 'online' | 'offline';

const sorters: Record<Sorter, (a: User, b: User) => number> = {
  az: (a, b) => a.name.localeCompare(b.name),
  za: (a, b) => b.name.localeCompare(a.name),
  youngest: (a, b) => a.age - b.age,
  oldest: (a, b) => b.age - a.age,
  city: (a, b) => a.city.localeCompare(b.city),
};

const filters: Record<Filter, (item: User) => boolean> = {
  all: () => true,
  online: (item) => item.active,
  offline: (item) => !item.active,
};

export const UsersFiltering = () => {
  const [users] = useState([
    { id: 1, name: 'John', age: 18, city: 'London', active: true },
    { id: 2, name: 'Alice', age: 25, city: 'Paris', active: false },
    { id: 3, name: 'Bob', age: 30, city: 'London', active: true },
    { id: 4, name: 'Emma', age: 17, city: 'Berlin', active: true },
    { id: 5, name: 'David', age: 41, city: 'Madrid', active: false },
    { id: 6, name: 'Sophia', age: 29, city: 'Rome', active: true },
    { id: 7, name: 'Mike', age: 21, city: 'Paris', active: false },
    { id: 8, name: 'Olivia', age: 34, city: 'London', active: true },
    { id: 9, name: 'Oliver', age: 22, city: 'London', active: false },
  ]);
  const [currentSorter, setCurrentSorter] = useState<Sorter>('az');
  const [currentFilter, setCurrentFilter] = useState<Filter>('all');
  const [query, setQuery] = useState('');

  const filteredUsers = [...users]
    .filter(filters[currentFilter])
    .filter((user) =>
      user.name.toLowerCase().includes(query.trim().toLowerCase()),
    )
    .sort(sorters[currentSorter]);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-3">
        <Select
          name="sort"
          value={currentSorter}
          onChange={(e) => {
            setCurrentSorter(e.target.value as Sorter);
          }}
        >
          <option value="az">a-z</option>
          <option value="za">z-a</option>
          <option value="youngest">youngest</option>
          <option value="oldest">oldest</option>
          <option value="city">city</option>
        </Select>
        <Select
          name="filter"
          value={currentFilter}
          onChange={(e) => {
            setCurrentFilter(e.target.value as Filter);
          }}
        >
          <option value="all">all</option>
          <option value="online">online</option>
          <option value="offline">offline</option>
        </Select>
      </div>
      <div>
        <AppInput
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUsers.map((user) => (
          <li key={user.id} className="rounded-lg bg-cyan-800 p-4 shadow-sm">
            <div className="space-y-2">
              <p>
                <span className="font-semibold">
                  {user.name}, {user.age}
                </span>
              </p>

              <p>
                <span className="font-semibold">Location:</span> {user.city}
              </p>

              <p>
                <span className="font-semibold">Status:</span>{' '}
                <span
                  className={
                    user.active
                      ? 'text-green-400 font-medium'
                      : 'text-amber-500 font-medium'
                  }
                >
                  {user.active ? 'Online' : 'Offline'}
                </span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
