import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { authToken } from 'utils/authToken';
import styled from 'styled-components';

export const AuthLayout = () => {
  const user = authToken.getToken();
  const navigate = useNavigate();

  // TODO -- 페이지 강제이동 시 깜빡임 발생
  useEffect(() => {
    if (user) navigate('/');
  }, [user, navigate]);

  return (
    <AppContainer>
      <Outlet />
    </AppContainer>
  );
};

export const AppContainer = styled.div`
  height: 100%;
`;
