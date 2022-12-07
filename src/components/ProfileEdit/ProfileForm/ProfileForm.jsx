import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useRecoilValue } from 'recoil';
import { addressState } from 'atoms/address';

import { Icon } from 'components/Common';
import { EditImage, ImgResetBtn } from 'components/ProfileEdit';
import { InputBirthDate, InputDuplicated } from 'components/Join';

import { toast } from 'react-toastify';
import { ReactComponent as Gps } from 'assets/icons/gps.svg';
import * as S from './styles';

export const ProfileForm = ({ data, mutate }) => {
  const {
    nickname: old_nickname,
    birth: old_birth,
    profile_image_url,
    location
  } = data;

  const DefaultCheck =
    profile_image_url ===
    'https://souso-bucket.s3.ap-northeast-2.amazonaws.com/defaultProfileImage.svg';

  const address = useRecoilValue(addressState);
  const old_town = location && location.split(' ')[2];

  const [imgURL, setImgURL] = useState(profile_image_url);
  const [imgData, setImgData] = useState({});
  const [imgDefault, setImgDefault] = useState(DefaultCheck);
  const [nickname, setNickname] = useState(old_nickname);
  const [town, setTown] = useState(old_town || '상도동');
  const [birth, setBirth] = useState(old_birth);
  const [isUnique, setIsUnique] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    const editedData = new FormData();
    const userData = new Blob(
      [
        JSON.stringify({
          birth: birth,
          is_default_profile: imgDefault,
          nickname: nickname,
          location: address.join(' ') || location
        })
      ],
      { type: 'application/json' }
    );

    imgURL !== profile_image_url && editedData.append('image', imgData);
    editedData.append('request', userData);

    if (
      nickname === old_nickname &&
      birth === old_birth &&
      imgURL === profile_image_url &&
      (!address.length || address[2] === old_town)
    ) {
      toast.warning('수정된 정보가 없습니다.');
    } else if (nickname !== old_nickname && !isUnique) {
      toast.warning('닉네임 중복체크를 해주세요.');
    } else {
      mutate(editedData);
    }
  };

  useEffect(() => {
    if (address.length) setTown(address[2]);
  }, [address]);

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
