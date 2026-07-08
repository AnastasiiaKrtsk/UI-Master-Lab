import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';

const url =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiVwqXuUxXrr-ELZ9uLuJuBpJMhaQ4D6g6mMnrd6YxSg&s=10';
export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col gap-4">
        <div>
          <img src={url} alt="Game screenshot" />
        </div>
        <div className="text-center">
          <Button
            onClick={() => {
              navigate('/');
            }}
          >
            Go home dude
          </Button>
        </div>
      </div>
    </>
  );
};
