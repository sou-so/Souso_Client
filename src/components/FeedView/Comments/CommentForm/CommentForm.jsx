import React from 'react';
import { ProfileImage } from 'components/Common';
import * as S from './styles';

export const CommentForm = ({ data }) => {
  const { user } = data;

  return (
    <S.InputContainer>
      <ProfileImage size={31} url={user.profile_img} />
      <S.FormContainer>
        <S.CommentInput placeholder="댓글을 입력해주세요" />
        <S.InputBtn>버튼</S.InputBtn>
      </S.FormContainer>
    </S.InputContainer>
  );
};
