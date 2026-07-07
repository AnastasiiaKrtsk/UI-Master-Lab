import { Route, Routes } from 'react-router-dom';
import { UsersHomePage } from './UsersHomePage';
import { UsersPage } from './UsersPage';
export type User = {
  id: string;
  name: string;
  address: string;
};
export const UsersApp = () => {
  const users: User[] = [
    { id: '1', name: 'Ora', address: 'Earth' },
    { id: '2', name: 'Fill', address: 'Mars' },
    { id: '3', name: 'Hollow', address: 'Venera' },
  ];
  return (
    <Routes>
      <Route path="/" element={<UsersHomePage users={users} />} />
      <Route path="/users/:id" element={<UsersPage users={users} />} />
    </Routes>
  );
};
