import React from 'react';
import { PostBody, PostFooterIcon } from 'components/Post';
import * as S from './styles';

export const ThumbRight = ({ postData, redirect }) => {
  const { id, thumbnail } = postData;

  return (
    <S.PostContainer onClick={() => redirect(id)}>
      <S.Contents>
        <PostBody data={postData} />
        <PostFooterIcon data={postData} />
      </S.Contents>

      {thumbnail.length > 0 && (
        <S.Thumbnail>
          <img src={thumbnail[0]} alt="" />
          {thumbnail.length > 1 && <span>+ {thumbnail.length}</span>}
        </S.Thumbnail>
      )}
    </S.PostContainer>
  );
};
