import React from 'react';
import { Icon, ProfileImage } from 'components/Common';
import { ReactComponent as Plane } from 'assets/icons/airplane.svg';
import * as S from './styles';

export const CommentForm = ({ postData }) => {
  const { author } = postData;

  return (
    <S.InputContainer>
      <S.FormContainer>
        <ProfileImage size={40} url={author.profile_image_url} />

        <S.Input placeholder="댓글을 입력해주세요" />
        <S.SendBtn>
          <Icon Icon={Plane} size={22} color={'#f4f4f4'} />
        </S.SendBtn>
      </S.FormContainer>

      <S.DragBar />
    </S.InputContainer>
  );
};
