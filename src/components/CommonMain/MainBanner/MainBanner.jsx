import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useQuery } from 'react-query';
import { user } from 'api/queries/user';

import { Skeleton } from 'components/Common';
import feed_banner from 'assets/images/logo.png';
import meet_banner from 'assets/images/banner_meet.png';
import * as S from './styles';

export const MainBanner = ({ text }) => {
  // const { data, isLoading } = useQuery(['user'], user.getProfile);
  const { pathname } = useLocation();
  const isFeed = pathname === '/';

  return (
    <S.BannerContainer>
      {/* {isLoading && <Skeleton type="title" width={60} />} */}
      <S.BannerText>
        <b>guest님,</b>
        {/* <b>{!isLoading ? data.nickname : <span />}님,</b> */}
        <br />
        {text[0]}
        <br />
        {text[1]}
      </S.BannerText>

      {isFeed ? (
        <Link to="#">추천 게시글 보기</Link>
      ) : (
        <Link to="#">독서 모임 보기</Link>
      )}

      <S.BannerImage
        src={isFeed ? feed_banner : meet_banner}
        className={isFeed ? 'feed' : 'meet'}
        alt="img"
      />
    </S.BannerContainer>
  );
};
