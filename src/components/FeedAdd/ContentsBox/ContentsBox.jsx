import React from 'react';
import { ReactComponent as Camera } from 'assets/icons/camera.svg';
import * as S from './styles';
import { Icon } from 'components/Common';

export const ContentsBox = () => {
  return (
    <S.FormWrap>
      <S.TextBox placeholder="소소한 이야기도 좋아요. 질문이나 이야기를 나눠보세요." />

      <S.PhotoInput type="file" accept="image/*" />
      <S.AddPhotoBtn>
        <Icon Icon={Camera} size={31} />
        <p>사진추가</p>
      </S.AddPhotoBtn>

      <S.SubmitButton type="submit">게시물 올리기</S.SubmitButton>
    </S.FormWrap>
  );
};
