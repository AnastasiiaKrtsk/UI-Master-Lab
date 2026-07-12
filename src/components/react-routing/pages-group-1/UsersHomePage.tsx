import { AppLink } from '../../ui/Links';
import type { User } from './UsersApp';

type UsersHomePageProps = {
  users: User[];
};

export const UsersHomePage = ({ users }: UsersHomePageProps) => {
  return (
    <>
      <h1>Users Home</h1>
      <div>
        {users.map((u) => (
          <AppLink key={u.id} to={`/users/${u.id}`}>
            {u.name}
          </AppLink>
        ))}
      </div>
    </>
  );
};
