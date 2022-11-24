import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { InputBirthDate, InputDuplicated } from 'components/Join';
import { ReactComponent as Gps } from 'assets/icons/gps.svg';
import { Icon } from 'components/Common';
import * as S from './styles';

export const UserData = () => {
  const [name, setName] = useState('조이');
  const [isUnique, setIsUnique] = useState('');
  const [birth, setBirth] = useState('1994. 01. 14');

  return (
    <S.FormContainer>
      <InputDuplicated
        values={{ nickname: name }}
        errors={{ nickname: '' }}
        onChange={e => setName(e.target.value)}
        isUnique={isUnique}
        setIsUnique={setIsUnique}
      />

      <Link to="/mytown">
        <S.Town>
          역삼동 <Icon Icon={Gps} />
        </S.Town>
      </Link>

      <InputBirthDate setBirth={setBirth} />
    </S.FormContainer>
  );
};
