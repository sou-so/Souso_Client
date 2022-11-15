import React from 'react';
import { Icon } from 'components/Common';
import { ReactComponent as Edit } from 'assets/icons/pencil.svg';
import { ReactComponent as Delete } from 'assets/icons/bin.svg';
import * as S from './styles';

export const EditDeleteButton = () => {
  return (
    <S.ButtonContainer>
      <li>
        <Icon Icon={Edit} size={11} color="#fff" />
        수정하기
      </li>
      <li>
        <Icon Icon={Delete} size={12} color="#fff" />
        삭제하기
      </li>
    </S.ButtonContainer>
  );
};
