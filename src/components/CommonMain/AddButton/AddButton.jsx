import React from 'react';
import { useLocation } from 'react-router-dom';
import { Icon } from 'components/Common';
import { ReactComponent as AddFeed } from 'assets/icons/pencil_writing.svg';
import { ReactComponent as AddMeet } from 'assets/icons/meet.svg';
import * as S from './styles';

export const AddButton = () => {
  const { pathname } = useLocation();
  const isMeet = pathname.includes('meet');

  return (
    <S.FeedAddBtn to={isMeet ? '/meetup' : '/feed/add'}>
      <Icon Icon={isMeet ? AddMeet : AddFeed} size={20} />
    </S.FeedAddBtn>
  );
};
