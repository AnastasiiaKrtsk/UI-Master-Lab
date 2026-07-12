import { Outlet, useParams } from 'react-router-dom';
import type { Game } from './GameLibApp';
import { AppNavLink } from '../../ui/Links';
import { NotFoundPage } from '../../layout/NotFoundPage';
type GameLibItemProps = {
  games: Game[];
};
export const GameLibItem = ({ games }: GameLibItemProps) => {
  const { id } = useParams();
  const game = games.find((el) => el.id === id);
  if (!game) {
    return <NotFoundPage />;
  }
  return (
    <>
      <div>
        <h1>Game Card</h1>

        <div className="flex flex-col gap-1.5" key={game?.id}>
          <p>Name: {game?.name}</p>
          <p>Genre: {game?.genre}</p>
          <p>Platform: {game?.platform}</p>
          <p>Year: {game?.year}</p>
        </div>
        <div>
          <AppNavLink to="overview" replace>
            Overview
          </AppNavLink>

          <AppNavLink to="reviews" replace>
            Reviews
          </AppNavLink>

          <AppNavLink to="screenshots" replace>
            Screenshots
          </AppNavLink>
        </div>
        <Outlet />
      </div>
    </>
  );
};
