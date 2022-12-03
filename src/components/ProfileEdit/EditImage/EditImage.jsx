import React from 'react';
import { Icon, ProfileImage } from 'components/Common';
import { ReactComponent as Camera } from 'assets/icons/camera.svg';
import * as S from './styles';

export const EditImage = ({ imgURL, setImgURL }) => {
  const editImageURL = e => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setImgURL(url);
  };

  return (
    <S.ImageContainer>
      <ProfileImage size={120} url={imgURL} />
      <S.EditButton htmlFor="edit">
        <Icon Icon={Camera} size={18} color="#fff" />
      </S.EditButton>
      <input
        type="file"
        id="edit"
        name="edit"
        accept="image/*"
        onChange={editImageURL}
      />
    </S.ImageContainer>
  );
};
