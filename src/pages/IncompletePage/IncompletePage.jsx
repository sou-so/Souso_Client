import React from 'react';
import IncompleteLogo from 'assets/images/logo_incomplete.gif';
import * as S from './styles';
import { PageHeader } from 'components/Common';
import { useLocation } from 'react-router-dom';

export const IncompletePage = () => {
  const { pathname } = useLocation();

  return (
    <S.PageContainer>
      <PageHeader title={pathname === '/meetup' ? '소소모임' : '채팅'} />
      <S.ImgWrap>
        <img src={IncompleteLogo} alt="서비스 준비중" />
      </S.ImgWrap>

      <h2>서비스 준비중</h2>

      <S.DescWarp>
        <p>보다 나은 서비스 제공을 위해 준비중입니다.</p>
        <p>이용에 불편을 드려 죄송합니다.</p>
      </S.DescWarp>
    </S.PageContainer>
  );
};
