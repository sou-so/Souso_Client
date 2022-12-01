import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'components/Common';
import { ReactComponent as ArrowRight } from 'assets/icons/arrow_white.svg';
import welcome from 'assets/images/welcome.png';
import * as S from './styles';

export const WelcomePage = () => {
  return (
    <S.PageContainer>
      <S.WelcomeBanner>
        <div>
          <p>
            <span>회원</span>님의
          </p>
          <p>가입을 환영해요!</p>
        </div>

        <div>
          <p>동네 곳곳 숨어있는 이야기를 모아</p>
          <p> 즐거운 소식을 나눠요.</p>
        </div>
      </S.WelcomeBanner>

      <S.ImgWrap>
        <img src={welcome} alt="welcome" />
      </S.ImgWrap>

      <S.LinkBtn>
        <span>로그인 하러가기</span>
        <Link to={'/'}>
          <Icon Icon={ArrowRight} />
        </Link>
      </S.LinkBtn>
    </S.PageContainer>
  );
};
