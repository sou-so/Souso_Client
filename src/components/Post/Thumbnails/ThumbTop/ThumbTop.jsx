import React from 'react';
import { PostBody, PostFooterIcon } from 'components/Post';
import * as S from './styles';

export const ThumbTop = ({ postData, children }) => {
  const { thumbnail } = postData;

  return (
    <S.PostContainer>
      {thumbnail.length > 0 && <S.Thumbnail src={thumbnail[0]} alt="" />}
      <S.ContentWrap>
        {children}
        <PostBody data={postData} />
        <PostFooterIcon data={postData} hasDate />
      </S.ContentWrap>
    </S.PostContainer>
  );
};
