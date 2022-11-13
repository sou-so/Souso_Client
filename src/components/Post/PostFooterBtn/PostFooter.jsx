import React from 'react';
import { Icon } from 'components/Common';
import { ReactComponent as Heart } from 'assets/icons/heart.svg';
import { ReactComponent as scrap } from 'assets/icons/scrap.svg';
import * as S from './styles';

export const PostFooterBtn = ({ data }) => {
  return (
    <S.FooterContainer>
      <S.BtnContainer>
        <S.BtnWrap>
          <button>
            <Icon Icon={Heart} size={17} />
          </button>
          <span>공감하기</span>
        </S.BtnWrap>

        <S.BtnWrap>
          <button>
            <Icon Icon={scrap} size={12} />
          </button>
          <span>보관하기</span>
        </S.BtnWrap>
      </S.BtnContainer>

      <S.DetailWrap>
        <span>17분 전</span>
        <span>조회 42</span>
      </S.DetailWrap>
    </S.FooterContainer>
  );
};
