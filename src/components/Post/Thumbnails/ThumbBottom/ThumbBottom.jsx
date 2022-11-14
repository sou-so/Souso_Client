import React from 'react';
import { PostBodyUser, PostFooterBtn } from 'components/Post';
import * as S from './styles';

export const ThumbBottom = ({ postData, redirect }) => {
  const { id, thumbnail, comments } = postData;

  return (
    <S.PostContainer onClick={() => redirect(id)}>
      <PostBodyUser data={postData} />
      {thumbnail.length > 0 && (
        <S.Thumbnail className={thumbnail.length > 1 ? 'multi' : 'single'}>
          <img src={thumbnail[0]} alt="" />
          {thumbnail.length > 1 && <img src={thumbnail[1]} alt="" />}
        </S.Thumbnail>
      )}
      <PostFooterBtn comments={comments} />
    </S.PostContainer>
  );
};
