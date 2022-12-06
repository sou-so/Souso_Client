import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { ReactComponent as AlertIcon } from 'assets/icons/alert.svg';
import { ReactComponent as MoreIcon } from 'assets/icons/arrow_b.svg';
import { ReactComponent as LocateIcon } from 'assets/icons/location.svg';
import { Icon } from 'components/Common';

import * as S from './styles';

export const FeedHeader = () => {
  const town = localStorage.getItem('souso_town');

  return (
    <S.FeedHeaderContainer>
      <Link to="mytown">
        <S.Location>
          <Icon Icon={LocateIcon} size={20} />
          <span>{town || '상도동'}</span>
          <Icon Icon={MoreIcon} size={14} />
        </S.Location>
      </Link>
      <S.Alert
        className="active"
        onClick={() => toast.warning('서비스 준비 중 입니다.')}
      >
        <Icon Icon={AlertIcon} />
      </S.Alert>
    </S.FeedHeaderContainer>
  );
};
