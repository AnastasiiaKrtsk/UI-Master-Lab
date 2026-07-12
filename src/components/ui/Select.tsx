import type { ReactNode } from 'react';

type SelectProps = {
  children: ReactNode;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};
export const Select = ({ children, name, value, onChange }: SelectProps) => {
  return (
    <select
      className="bg-cyan-900 px-3 py-1 rounded"
      name={name}
      value={value}
      onChange={onChange}
    >
      {children}
    </select>
  );
};
