import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { user } from 'api/queries/user';
import { Icon } from 'components/Common';
import { ReactComponent as ArrowRight } from 'assets/icons/arrow_white.svg';
import welcome from 'assets/images/welcome.png';
import * as S from './styles';

export const WelcomePage = () => {
  const { data, isLoading } = useQuery(['user'], user.getProfile);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    localStorage.setItem('souso_token', '');
    navigate('/login');
  };

  return (
    <S.PageContainer>
      <S.WelcomeBanner>
        <div>
          <p>
            <span>{!isLoading && data.nickname}</span>님의 <br />
            가입을 환영해요!
          </p>
        </div>

        <div>
          <p>
            동네 곳곳 숨어있는 이야기를 모아 <br />
            즐거운 소식을 나눠요.
          </p>
        </div>
      </S.WelcomeBanner>

      <S.ImgWrap>
        <img src={welcome} alt="welcome" />
      </S.ImgWrap>

      <S.LinkBtn onClick={handleLoginClick}>
        <span>로그인 하러가기</span>
        <Icon Icon={ArrowRight} size={8} />
      </S.LinkBtn>
    </S.PageContainer>
  );
};
