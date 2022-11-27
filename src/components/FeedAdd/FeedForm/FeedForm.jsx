import React, { useState } from 'react';
import { ImgAddPreview, SelectedCategory } from 'components/FeedAdd';
import * as S from './styles';

export const FeedForm = ({ category, mutate, toggleModal }) => {
  const [imgList, setImgList] = useState([]);
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('images', imgList[0]);
    formData.append(
      'request',
      JSON.stringify({
        category_id: category.id,
        content: '내용'
      })
    );
    console.log([...formData]);
    mutate(formData);
  };

  return (
    <S.FormWrap onSubmit={handleSubmit}>
      <SelectedCategory category={category} toggleModal={toggleModal} />

      <S.TextBox
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="소소한 이야기도 좋아요. 질문이나 이야기를 나눠보세요."
      />

      <ImgAddPreview imgList={imgList} setImgList={setImgList} />

      <S.SubmitButton type="submit">게시물 올리기</S.SubmitButton>
    </S.FormWrap>
  );
};
