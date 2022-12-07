import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EditImage, ImgResetBtn } from 'components/ProfileEdit';
import { Icon } from 'components/Common';
import { InputBirthDate, InputDuplicated } from 'components/Join';
import { ReactComponent as Gps } from 'assets/icons/gps.svg';
import { toast } from 'react-toastify';
import * as S from './styles';

export const ProfileForm = ({ data, mutate }) => {
  const { nickname: oldNickname, birth: oldBirth, profile_image_url } = data;
  const DefaultCheck =
    profile_image_url ===
    'https://souso-bucket.s3.ap-northeast-2.amazonaws.com/defaultProfileImage.svg';

  const myTown = localStorage.getItem('souso_town');
  const [imgURL, setImgURL] = useState(profile_image_url);
  const [imgData, setImgData] = useState({});
  const [imgDefault, setImgDefault] = useState(DefaultCheck);
  const [nickname, setNickname] = useState(oldNickname);
  const [town, setTown] = useState(myTown || '상도동');
  const [birth, setBirth] = useState(oldBirth);
  const [isUnique, setIsUnique] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    const editedData = new FormData();
    const userData = new Blob(
      [
        JSON.stringify({
          birth: birth,
          is_default_profile: imgDefault,
          nickname: nickname
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
    } else if (
      ((nickname !== oldNickname && isUnique) || birth !== oldBirth) &&
      imgURL === profile_image_url
    ) {
      editedData.append('request', userData);
      mutate(editedData);
    } else if (imgURL !== profile_image_url) {
      editedData.append('image', imgData);
      editedData.append('request', userData);
      mutate(editedData);
    } else {
      toast.warning('닉네임 중복체크를 해주세요.');
    }
  };

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <EditImage
        imgURL={imgURL}
        setImgURL={setImgURL}
        setImgData={setImgData}
        setImgDefault={setImgDefault}
      />
      <ImgResetBtn
        setImgURL={setImgURL}
        setImgData={setImgData}
        setImgDefault={setImgDefault}
      />

      <S.UserData>
        <InputDuplicated
          values={{ nickname: nickname }}
          errors={{ nickname: '' }}
          onChange={e => setNickname(e.target.value)}
          isUnique={isUnique}
          setIsUnique={setIsUnique}
        />

        <Link to="/mytown" state={{ from: 'profile' }}>
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
