import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PostBody, PostFooterIcon } from 'components/Post';
import * as S from './styles';

export const ThumbTop = ({ postData, children }) => {
  const navigate = useNavigate();
  const { feed_id, image_url } = postData;

  return (
    <S.PostContainer onClick={() => navigate(`/feed/${feed_id}`)}>
      {image_url.length > 0 && <S.Thumbnail src={image_url[0]} alt="" />}
      <S.ContentWrap>
        {children}
        <PostBody postData={postData} />
        <PostFooterIcon postData={postData} hasDate />
      </S.ContentWrap>
    </S.PostContainer>
  );
};
