import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EditImage } from 'components/ProfileEdit';
import { Icon } from 'components/Common';
import { InputBirthDate, InputDuplicated } from 'components/Join';
import { ReactComponent as Gps } from 'assets/icons/gps.svg';
import * as S from './styles';

export const ProfileForm = () => {
  const [imageURL, setImageURL] = useState('');
  const [nickname, setNickname] = useState('조이');
  const [town, setTown] = useState('역삼동');
  const [isUnique, setIsUnique] = useState(false);
  const [birth, setBirth] = useState('1994. 01. 14');

  const handleSubmit = e => {
    e.preventDefault();

    /** userdata {
      imageURL: imageURL, 
      nickname: nickname,
      birth: birth
    }
    */
  };

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <EditImage imageURL={imageURL} setImageURL={setImageURL} />

      <S.UserData>
        <InputDuplicated
          values={{ nickname: nickname }}
          errors={{ nickname: '' }}
          onChange={e => setNickname(e.target.value)}
          isUnique={isUnique}
          setIsUnique={setIsUnique}
        />

        <Link to="/mytown">
          <S.Town>
            {town} <Icon Icon={Gps} />
          </S.Town>
        </Link>

        <InputBirthDate setBirth={setBirth} />
      </S.UserData>

      <S.SubmitButton>프로필 수정하기</S.SubmitButton>
    </S.FormContainer>
  );
};
