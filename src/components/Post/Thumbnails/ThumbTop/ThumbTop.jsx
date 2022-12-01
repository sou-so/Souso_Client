import React from 'react';
import { PostBody, PostFooterIcon } from 'components/Post';
import * as S from './styles';

export const ThumbTop = ({ postData, children }) => {
  const { image_url } = postData;

  return (
    <S.PostContainer>
      {image_url.length > 0 && <S.Thumbnail src={image_url[0]} alt="" />}
      <S.ContentWrap>
        {children}
        <PostBody postData={postData} />
        <PostFooterIcon postData={postData} hasDate />
      </S.ContentWrap>
    </S.PostContainer>
  );
};
