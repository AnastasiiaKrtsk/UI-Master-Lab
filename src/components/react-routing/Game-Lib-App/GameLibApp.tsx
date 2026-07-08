import { Navigate, Route, Routes } from 'react-router-dom';
import { GameLibHome } from './GameLibHome';
import { GameLibAbout } from './GameLibAbout';
import { GameLibGames } from './GameLibGames';
import { GameLibItem } from './GameLibItem';
import { NotFoundPage } from '../../layout/NotFoundPage';
import { GameOverview, GameReviews, GameScreenshots } from './CardPages';

export type Game = {
  id: string;
  name: string;
  genre: string;
  platform: string;
  year: number;
};
export const GameLibApp = () => {
  const games: Game[] = [
    {
      id: '1',
      name: 'Minecraft',
      genre: 'Sandbox',
      platform: 'PC',
      year: 2011,
    },
    {
      id: '2',
      name: 'Stardew Valley',
      genre: 'Simulation',
      platform: 'PC',
      year: 2016,
    },
    {
      id: '3',
      name: 'Hades',
      genre: 'Roguelike',
      platform: 'PC',
      year: 2020,
    },
  ];
  return (
    <Routes>
      <Route path="/" element={<GameLibHome />} />
      <Route path="/about" element={<GameLibAbout />} />
      <Route path="/games" element={<GameLibGames games={games} />} />
      <Route path="/games/:id" element={<GameLibItem games={games} />}>
        //& Outlet from GameLibItem
        <Route index element={<Navigate to="overview" replace />} />
        <Route path="overview" element={<GameOverview />} />
        <Route path="reviews" element={<GameReviews />} />
        <Route path="screenshots" element={<GameScreenshots />} />
      </Route>
      //&Redirect with replacing
      <Route path="library" element={<Navigate to="/games" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
