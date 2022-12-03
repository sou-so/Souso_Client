import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EditImage } from 'components/ProfileEdit';
import { Icon } from 'components/Common';
import { InputBirthDate, InputDuplicated } from 'components/Join';
import { ReactComponent as Gps } from 'assets/icons/gps.svg';
import { toast } from 'react-toastify';
import * as S from './styles';

export const ProfileForm = ({ data, mutate }) => {
  const { nickname: oldNickname, birth: oldBirth, profile_image_url } = data;

  const [imgURL, setImgURL] = useState(profile_image_url);
  const [imgData, setImgData] = useState({});
  const [nickname, setNickname] = useState(oldNickname);
  const [town, setTown] = useState('상도동');
  const [birth, setBirth] = useState(oldBirth);
  const [isUnique, setIsUnique] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    const editedData = new FormData();
    const userData = new Blob(
      [
        JSON.stringify({
          birth: oldBirth,
          nickname: oldNickname
        })
      ],
      { type: 'application/json' }
    );

    if (
      nickname === oldNickname &&
      birth === oldBirth &&
      imgURL === profile_image_url
    ) {
      toast.warning('수정된 정보가 없습니다.');
    } else {
      editedData.append('image', imgData);
      editedData.append('request', userData);
      mutate(editedData);
    }
  };

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <EditImage
        imgURL={imgURL}
        setImgURL={setImgURL}
        setImgData={setImgData}
      />

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
