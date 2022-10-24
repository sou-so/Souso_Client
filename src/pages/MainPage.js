import React from 'react';
import { Link } from 'react-router-dom';

export const MainPage = () => {
  return (
    <div>
      <Link to={'/login'}><div>Login</div></Link>
      <Link to={'/join'}><div>Join</div></Link>
    </div>
  );
};
