import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const user = '';

export const MainPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  });

  return (
    <div>
      <Link to={'/login'}>
        <div>Login</div>
      </Link>
      <Link to={'/join'}>
        <div>Join</div>
      </Link>
    </div>
  );
};
