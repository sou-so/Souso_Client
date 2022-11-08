import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Category, ScrollContainer } from 'components/Common';
import * as C from 'components/Feed';
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
      <C.FeedHeader />
      <ScrollContainer>
        <S.SectionWrap>
          <C.FeedBanner user={user} />
          <C.SearchBar />
          <C.HashTags />
        </S.SectionWrap>
        <S.CategoryWrap>
          <h3>어떤 이야기가 듣고 싶으세요?</h3>
          <Category more />
        </S.CategoryWrap>
        <C.PostList />
      </ScrollContainer>
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
