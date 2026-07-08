import { useNavigate, useParams } from 'react-router-dom';
import type { User } from './UsersApp';
import { Button } from '../../ui/Button';
type UsersPageProps = {
  users: User[];
};
export const UsersPage = ({ users }: UsersPageProps) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = users.find((u) => u.id === id);
  return (
    <>
      <Button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </Button>
      <h1>UserPage</h1>

      <div className="flex flex-col">
        <span>User name: {product?.name}</span>
        <span>User address: {product?.address}</span>
      </div>
    </>
  );
};
