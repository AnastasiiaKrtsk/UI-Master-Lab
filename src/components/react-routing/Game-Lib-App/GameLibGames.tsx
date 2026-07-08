import { useNavigate, useSearchParams } from 'react-router-dom';
import { AppLink, AppNavLink } from '../../ui/AppNavLink';
import type { Game } from './GameLibApp';
import { Button } from '../../ui/Button';

type GameLibGamesProps = {
  games: Game[];
};
export const GameLibGames = ({ games }: GameLibGamesProps) => {
  //&PARAMS FOR FILTERING
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  //&FILTER
  const genre = searchParams.get('genre');
  const filteredGames = games.filter((game) => {
    if (genre) {
      return game.genre === genre;
    }
    return true;
  });

  return (
    <>
      <h1>Games</h1>
      <Button
        onClick={() => {
          navigate(`/`);
        }}
      >
        Home
      </Button>
      <AppNavLink to="/games">All</AppNavLink>
      <AppNavLink to="/games?genre=Sandbox">Sandbox</AppNavLink>
      <AppNavLink to="/games?genre=Simulation">Simulation</AppNavLink>
      <AppNavLink to="/games?genre=Roguelike">Roguelike</AppNavLink>

      <ul>
        {filteredGames.map((game) => (
          <li key={game.id}>
            <AppLink to={`${game.id}${location.search}`}>{game.name}</AppLink>
          </li>
        ))}
      </ul>
    </>
  );
};
