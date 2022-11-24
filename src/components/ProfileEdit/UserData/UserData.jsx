import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { InputDuplicated } from 'components/Join';
import * as S from './styles';

export const UserData = () => {
  const [name, setName] = useState('조이');
  const [isUnique, setIsUnique] = useState('');

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
        <S.Town>역삼동</S.Town>
      </Link>
    </S.FormContainer>
  );
};
