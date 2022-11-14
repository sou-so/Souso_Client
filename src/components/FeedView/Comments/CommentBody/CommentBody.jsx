import React from 'react';
import * as S from './styles';

export const CommentBody = ({ data }) => {
  return (
    <S.CommentContainer>
      <S.CommentNumber></S.CommentNumber>
      <S.CommentWrap></S.CommentWrap>
    </S.CommentContainer>
  );
};
