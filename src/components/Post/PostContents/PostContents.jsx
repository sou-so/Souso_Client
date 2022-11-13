import React from 'react';
import * as S from './styles';

export const PostContents = ({ data }) => {
  return (
    <S.ContentsContainer>
      <S.PostText>
        <p>{data.text}</p>
      </S.PostText>
      <S.ThumbnailWrap>
        {data.thumbnail.map(url => (
          <img src={url} alt="thumbnail" />
        ))}
      </S.ThumbnailWrap>
    </S.ContentsContainer>
  );
};
