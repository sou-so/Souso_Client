import React, { useRef } from 'react';
import { ReactComponent as Camera } from 'assets/icons/camera.svg';
import { Icon } from 'components/Common';
import * as S from './styles';

export const ImgAddPreview = ({ imgList, setImgList }) => {
  const ImgRef = useRef();

  const handleBtnClick = e => {
    e.preventDefault();
    ImgRef.current.click();
  };

  const onImgUpload = e => {
    const fileList = e.target.files;
    let fileUrlList = [...imgList];

    for (let i = 0; i < fileList.length; i++) {
      const currentImageUrl = URL.createObjectURL(fileList[i]);
      fileUrlList.push(currentImageUrl);
    }

    if (fileUrlList.length > 10) {
      fileUrlList = fileUrlList.slice(0, 10);
    }

    setImgList(fileUrlList);
  };

  const handleDeleteImage = id => {
    setImgList(imgList.filter((_, index) => index !== id));
  };

  return (
    <S.FieldWrap className={`${imgList.length > 3 && 'hasPhoto'}`}>
      <S.PhotoInput
        type="file"
        accept="image/*"
        multiple
        ref={ImgRef}
        onChange={onImgUpload}
      />
      <S.AddPhotoBtn onClick={handleBtnClick}>
        <Icon Icon={Camera} size={31} />
        <p>사진추가</p>
      </S.AddPhotoBtn>

      {imgList.length > 0 && (
        <S.ImgPreview>
          {imgList.map((url, i) => (
            <S.ImgWrap key={i} onClick={() => handleDeleteImage(i)}>
              <img src={url} alt="이미지 미리보기" />
            </S.ImgWrap>
          ))}
        </S.ImgPreview>
      )}
    </S.FieldWrap>
  );
};