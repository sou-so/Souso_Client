import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FeedBanner, FeedHeader, SearchBar } from 'components/Feed';
import * as S from './styles';

const user = 'joy';

export const FeedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  });

  return (
    <S.PageContainer>
      <FeedHeader />
      <S.SectionWrap>
        <FeedBanner user={user} />
        <SearchBar />
      </S.SectionWrap>
      <S.TempLinks>
        <Link to={'/login'}>
          <div>Login</div>
        </Link>
        <Link to={'/join'}>
          <div>Join</div>
        </Link>
        <Link to={'/view'}>
          <div>피드 보기</div>
        </Link>
        <Link to={'/add'}>
          <div>피드 추가</div>
        </Link>
      </S.TempLinks>
    </S.PageContainer>
  );
};
