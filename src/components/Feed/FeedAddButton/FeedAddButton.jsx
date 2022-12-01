import React from 'react';
import { Icon } from 'components/Common';
import { ReactComponent as Add } from 'assets/icons/pencil_writing.svg';
import * as S from './styles';

export const FeedAddButton = () => {
  return (
    <S.FeedAddBtn to="/feed/add">
      <Icon Icon={Add} size={20} color="#fff" />
    </S.FeedAddBtn>
  );
};
