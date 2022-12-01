import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Navbar } from 'components/Common';
import { authToken } from 'utils/authToken';
import styled from 'styled-components';

export const AppLayout = ({ navbar }) => {
  const user = authToken.getToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('/login');
  }, [user, navigate]);

  return (
    <AppContainer>
      <Outlet />
      {navbar && <Navbar />}
    </AppContainer>
  );
};

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  & > *:first-child {
    flex: 1;
  }
`;
