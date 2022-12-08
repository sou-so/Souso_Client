import React from 'react';
import { useLocation } from 'react-router-dom';
import { Icon } from 'components/Common';
import { ReactComponent as AddFeed } from 'assets/icons/pencil_writing.svg';
import { ReactComponent as AddMeet } from 'assets/icons/meet.svg';
import * as S from './styles';

export const AddButton = () => {
  const { pathname } = useLocation();
  const isFeed = pathname === '/';

  return (
    <S.FeedAddBtn to={isFeed ? '/feed/add' : '/meetup'}>
      <Icon Icon={isFeed ? AddFeed : AddMeet} size={20} />
    </S.FeedAddBtn>
  );
};
