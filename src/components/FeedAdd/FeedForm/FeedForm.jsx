import React, { useState } from 'react';
import { ImgAddPreview } from 'components/FeedAdd';
import * as S from './styles';

export const FeedForm = ({ currentCategory }) => {
  const [imgList, setImgList] = useState([]);

  return (
    <S.FormWrap>
      <S.TextBox placeholder="소소한 이야기도 좋아요. 질문이나 이야기를 나눠보세요." />

      <S.CategoryInput value={currentCategory} readOnly />

      <ImgAddPreview imgList={imgList} setImgList={setImgList} />

      <S.SubmitButton type="submit">게시물 올리기</S.SubmitButton>
    </S.FormWrap>
  );
};
