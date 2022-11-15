import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PostBody, PostFooterIcon } from 'components/Post';
import * as S from './styles';

export const ThumbRight = ({ postData }) => {
  const navigate = useNavigate();
  const { id, thumbnail } = postData;

  return (
    <S.PostContainer onClick={() => navigate(`/feed/${id}`)}>
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
