import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EditImage } from 'components/ProfileEdit';
import { Icon } from 'components/Common';
import { InputBirthDate, InputDuplicated } from 'components/Join';
import { ReactComponent as Gps } from 'assets/icons/gps.svg';
import * as S from './styles';

export const ProfileForm = ({ data, mutate }) => {
  const { nickname: oldNickname, birth: oldBirth, profile_image_url } = data;

  const [imgURL, setImgURL] = useState(profile_image_url);
  const [nickname, setNickname] = useState(oldNickname);
  const [town, setTown] = useState('상도동');
  const [birth, setBirth] = useState(oldBirth);
  const [isUnique, setIsUnique] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    const userData = {
      profile_image_url: imgURL,
      nickname: nickname,
      birth: birth
    };

    mutate(userData);
  };

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <EditImage imgURL={imgURL} setImgURL={setImgURL} />

      <S.UserData>
        <InputDuplicated
          values={{ nickname: nickname }}
          errors={{ nickname: '' }}
          onChange={e => setNickname(e.target.value)}
          isUnique={isUnique}
          setIsUnique={setIsUnique}
        />

        <Link to="#">
          <S.Town>
            {town} <Icon Icon={Gps} />
          </S.Town>
        </Link>

        <InputBirthDate birth={birth} setBirth={setBirth} />
      </S.UserData>

      <S.SubmitButton>프로필 수정하기</S.SubmitButton>
    </S.FormContainer>
  );
};
