import { AppLink } from '../../ui/AppNavLink';

export const GameLibHome = () => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <h1>GameLibHome</h1>
        <p>"Welcome to Game Lib"</p>
      </div>
      <div>
        <AppLink to="/games">Games</AppLink>
        <AppLink to="/about">About</AppLink>
      </div>
    </>
  );
};
