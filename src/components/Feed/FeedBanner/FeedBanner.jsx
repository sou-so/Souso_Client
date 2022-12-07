import React from 'react';
import { Link } from 'react-router-dom';
import banner from 'assets/images/logo.png';
import * as S from './styles';

export const FeedBanner = ({ data }) => {
  const { nickname } = data;

  return (
    <S.BannerContainer>
      <p>
        <b>{nickname || '_____'}님,</b>
        <br />
        소소한 얘기를 소소가
        <br />
        기다리고 있어요.
      </p>
      <Link to="#">추천 게시글 보기</Link>
      <img src={banner} alt="img" />
    </S.BannerContainer>
  );
};
