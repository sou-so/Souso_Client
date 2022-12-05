import React from 'react';
import * as S from './styles';

export const ImgResetBtn = ({ setImgURL, setImgData, setImgDefault }) => {
  const handleImgRest = () => {
    const DefaultImgURL =
      'https://souso-bucket.s3.ap-northeast-2.amazonaws.com/defaultProfileImage.svg';
    setImgURL(DefaultImgURL);
    setImgData(null);
    setImgDefault(true);
  };

  return (
    <S.ButtonWrap>
      <S.ResetBtn type="button" onClick={handleImgRest}>
        이미지 삭제
      </S.ResetBtn>
    </S.ButtonWrap>
  );
};
