import React from 'react';
import logo from 'assets/images/logo_error.png';
import * as S from './styles';

export const EmptyList = ({ message }) => {
  return (
    <S.EmptyContainer>
      <img src={logo} alt="icon" />
      <p>{message}</p>
    </S.EmptyContainer>
  );
};
