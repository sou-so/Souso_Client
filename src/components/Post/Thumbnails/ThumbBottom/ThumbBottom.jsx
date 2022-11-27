import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PostBodyUser, PostFooterBtn } from 'components/Post';
import * as S from './styles';

export const ThumbBottom = ({ postData }) => {
  const navigate = useNavigate();
  const { feed_id, image_url } = postData;
  const comment_count = 5;

  return (
    <S.PostContainer onClick={() => navigate(`/feed/${feed_id}`)}>
      <PostBodyUser postData={postData} />
      {image_url.length > 0 && (
        <S.Thumbnail className={image_url.length > 1 ? 'multi' : 'single'}>
          <img src={image_url[0]} alt="" />
          {image_url.length > 1 && <img src={image_url[1]} alt="" />}
        </S.Thumbnail>
      )}
      <PostFooterBtn comments={comment_count} />
    </S.PostContainer>
  );
};
