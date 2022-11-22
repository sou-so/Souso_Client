import React, { useRef, useState } from 'react';
import { ReactComponent as Camera } from 'assets/icons/camera.svg';
import { Icon } from 'components/Common';
import * as S from './styles';

export const ContentsBox = () => {
  const [imgList, setImgList] = useState([]);
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

    if (fileUrlList.length > 5) {
      fileUrlList = fileUrlList.slice(0, 5);
    }

    setImgList(fileUrlList);
  };

  const handleDeleteImage = id => {
    setImgList(imgList.filter((_, index) => index !== id));
  };

  return (
    <S.FormWrap>
      <S.TextBox placeholder="소소한 이야기도 좋아요. 질문이나 이야기를 나눠보세요." />

      <S.PhotoInput
        type="file"
        accept="image/*"
        multiple
        ref={ImgRef}
        onChange={onImgUpload}
      />
      <S.FieldWrap className={`${imgList.length > 3 && 'hasPhoto'}`}>
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

      <S.SubmitButton type="submit">게시물 올리기</S.SubmitButton>
    </S.FormWrap>
  );
};
