import React from 'react';
import IncompleteLogo from 'assets/images/logo_incomplete.gif';
import * as S from './styles';

export const InComplete = () => {
  return (
    <S.Container>
      <img src={IncompleteLogo} alt="서비스 준비중" />

      <h2>서비스 준비중</h2>

      <p>
        보다 나은 서비스 제공을 위해 준비중입니다.
        <br />
        이용에 불편을 드려 죄송합니다.
      </p>
    </S.Container>
  );
};
