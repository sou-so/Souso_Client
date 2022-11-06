import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from 'components/Common';
import * as S from './styles';

export const AppLayout = () => {
  return (
    <S.AppContainer>
      <Outlet />
      <Navbar />
    </S.AppContainer>
  );
};
