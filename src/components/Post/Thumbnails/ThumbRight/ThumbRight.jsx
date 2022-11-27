import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PostBody, PostFooterIcon } from 'components/Post';
import * as S from './styles';

export const ThumbRight = ({ postData }) => {
  const navigate = useNavigate();
  const { feed_id, image_url } = postData;

  return (
    <S.PostContainer onClick={() => navigate(`/feed/${feed_id}`)}>
      <S.Contents>
        <PostBody postData={postData} />
        <PostFooterIcon postData={postData} />
      </S.Contents>

      {image_url.length > 0 && (
        <S.Thumbnail>
          <img src={image_url[0]} alt="" />
          {image_url.length > 1 && <span>+ {image_url.length}</span>}
        </S.Thumbnail>
      )}
    </S.PostContainer>
  );
};
