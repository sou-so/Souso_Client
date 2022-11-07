import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as AlertIcon } from 'assets/icons/alert.svg';
import { ReactComponent as MoreIcon } from 'assets/icons/arrow_b.svg';
import { ReactComponent as LocateIcon } from 'assets/icons/location.svg';
import { Icon } from 'components/Common';
import * as S from './styles';

export const FeedHeader = () => {
  return (
    <S.FeedHeaderContainer>
      <Link to="mytown">
        <S.Location>
          <Icon Icon={LocateIcon} size={20} />
          <span>전포동</span>
          <Icon Icon={MoreIcon} size={14} />
        </S.Location>
      </Link>
      <S.Alert className="active">
        <Icon Icon={AlertIcon} />
      </S.Alert>
    </S.FeedHeaderContainer>
  );
};
