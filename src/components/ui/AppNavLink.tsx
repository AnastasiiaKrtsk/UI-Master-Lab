import React from 'react';
import { Link, NavLink } from 'react-router-dom';

type AppNavLinkProps = {
  to: string;
  children: React.ReactNode;
};
export const AppNavLink = ({ to, children }: AppNavLinkProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-4 py-2  ${isActive ? 'text-amber-300' : 'text-gray-500'}`
      }
    >
      {children}
    </NavLink>
  );
};

export const AppLink = ({ to, children }: AppNavLinkProps) => {
  return (
    <Link to={to} className={'px-4 py-2 text-amber-300 hover:underline'}>
      {children}
    </Link>
  );
};
