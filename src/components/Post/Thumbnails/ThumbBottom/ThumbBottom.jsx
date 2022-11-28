import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PostBodyUser, PostFooterBtn } from 'components/Post';
import * as S from './styles';

export const ThumbBottom = ({ postData, refetch }) => {
  const navigate = useNavigate();
  const { feed_id, image_url, comment_count } = postData;

  return (
    <S.PostContainer onClick={() => navigate(`/feed/${feed_id}`)}>
      <PostBodyUser postData={postData} />
      {image_url.length > 0 && (
        <S.Thumbnail className={image_url.length > 1 ? 'multi' : 'single'}>
          <img src={image_url[0]} alt="" />
          {image_url.length > 1 && <img src={image_url[1]} alt="" />}
        </S.Thumbnail>
      )}
      <PostFooterBtn
        postData={postData}
        comments={comment_count + ''}
        refetch={refetch}
      />
    </S.PostContainer>
  );
};
