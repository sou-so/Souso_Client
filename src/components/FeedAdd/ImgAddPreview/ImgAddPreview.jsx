import React, { useRef, useState } from 'react';
import { ReactComponent as Camera } from 'assets/icons/camera.svg';
import { Icon } from 'components/Common';
import * as S from './styles';

export const ImgAddPreview = ({ imgList, setImgList }) => {
  const [preview, setPreview] = useState([]);
  const ImgRef = useRef();

  const handleBtnClick = e => {
    e.preventDefault();
    ImgRef.current.click();
  };

  const onImgUpload = e => {
    const fileList = e.target.files;
    const fileUrlList = [];

    for (let i = 0; i < fileList.length; i++) {
      const currentImageUrl = URL.createObjectURL(fileList[i]);
      fileUrlList.push(currentImageUrl);
    }

    // TODO -- 10장 이상 일때 modal이나 메세지로 알려주기
    if (preview.length > 10) {
      setPreview(preview.slice(0, 10));
    }

    setImgList(imgList.concat([...fileList])); // 서버로 전송하는 File형식 이미지
    setPreview(preview.concat([...fileUrlList])); // 미리보기 Blob형식 이미지
  };

  const handleDeleteImage = id => {
    setImgList(imgList.filter((_, index) => index !== id));
    setPreview(preview.filter((_, index) => index !== id));
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

      <S.ImgPreview>
        {preview.map((url, i) => (
          <S.ImgWrap key={i} onClick={() => handleDeleteImage(i)}>
            <img src={url} alt="이미지 미리보기" />
          </S.ImgWrap>
        ))}
      </S.ImgPreview>
    </S.FieldWrap>
  );
};
