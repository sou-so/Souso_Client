import React from 'react';
import { Link } from 'react-router-dom';
import { Category, ScrollContainer } from 'components/Common';
import * as C from 'components/Feed';
import * as S from './styles';

const user = 'joy';

export const FeedPage = () => {
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
          <Category more linkTo />
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
        <Link to={'/feed/add'}>
          <div>피드 추가</div>
        </Link>
      </S.TempLinks>
    </S.PageContainer>
  );
};
