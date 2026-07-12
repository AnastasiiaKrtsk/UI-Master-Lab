import { useState } from 'react';
import { Select } from '../../ui/Select';
type Product = {
  id: number;
  name: string;
  category: string;
  brand: string;
  price: number;
  inStock: boolean;
  rating: number;
};
type Sorter = 'az' | 'za';
type Filter = 'all' | 'instock';

const sorterKeys: Sorter[] = ['az', 'za'];
const filterKeys: Filter[] = ['all', 'instock'];

const sorters: Record<Sorter, (a: Product, b: Product) => number> = {
  az: (a, b) => a.name.localeCompare(b.name),
  za: (a, b) => b.name.localeCompare(a.name),
};
const filters: Record<Filter, (item: Product) => boolean> = {
  all: () => true,
  instock: (item) => item.inStock,
};
// Type Guard Functions
const isSorter = (value: string): value is Sorter => {
  return sorterKeys.includes(value as Sorter);
};
const isFilter = (value: string): value is Filter => {
  return filterKeys.includes(value as Filter);
};

export const ProductsFiltering = () => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: 'Laptop',
      category: 'Electronics',
      brand: 'Dell',
      price: 1200,
      inStock: true,
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Phone',
      category: 'Electronics',
      brand: 'Samsung',
      price: 850,
      inStock: true,
      rating: 4.5,
    },
    {
      id: 3,
      name: 'Keyboard',
      category: 'Accessories',
      brand: 'Logitech',
      price: 80,
      inStock: true,
      rating: 4.7,
    },
    {
      id: 4,
      name: 'Monitor',
      category: 'Electronics',
      brand: 'LG',
      price: 350,
      inStock: false,
      rating: 4.4,
    },
    {
      id: 5,
      name: 'Mouse',
      category: 'Accessories',
      brand: 'Razer',
      price: 60,
      inStock: true,
      rating: 4.6,
    },
    {
      id: 6,
      name: 'Chair',
      category: 'Furniture',
      brand: 'IKEA',
      price: 220,
      inStock: false,
      rating: 4.2,
    },
    {
      id: 7,
      name: 'Desk',
      category: 'Furniture',
      brand: 'IKEA',
      price: 400,
      inStock: true,
      rating: 4.3,
    },
    {
      id: 8,
      name: 'Headphones',
      category: 'Audio',
      brand: 'Sony',
      price: 280,
      inStock: true,
      rating: 4.9,
    },
  ]);
  const [currentSorter, setCurrentSorter] = useState<Sorter>('az');
  const [currentFilter, setCurrentFilter] = useState<Filter>('all');

  const sorted = [...products].sort(sorters[currentSorter]);
  const filtered = sorted.filter(filters[currentFilter]);
  return (
    <div>
      <div className="flex gap-3">
        <Select
          name="sort"
          value={currentSorter}
          onChange={(e) => {
            const value = e.target.value;
            if (isSorter(value)) {
              setCurrentSorter(e.target.value as Sorter);
            } else {
              console.error(`Invalid sorter: ${value}`);
            }
          }}
        >
          <option value="az">a-z</option>
          <option value="za">z-a</option>
        </Select>
        <Select
          name="filter"
          value={currentFilter}
          onChange={(e) => {
            const value = e.target.value;
            if (isFilter(value)) {
              setCurrentFilter(e.target.value as Filter);
            } else {
              console.error(`Invalid filter: ${value}`);
            }
          }}
        >
          <option value="all">all</option>
          <option value="instock">instock</option>
        </Select>
      </div>
      <ul>
        {filtered.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};
