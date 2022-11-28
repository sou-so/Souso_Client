import React from 'react';
import { Icon } from 'components/Common';
import { ReactComponent as Heart } from 'assets/icons/heart.svg';
import { ReactComponent as Scrap } from 'assets/icons/scrap.svg';
import { ReactComponent as Comment } from 'assets/icons/comment.svg';
import * as S from './styles';

export const PostFooterBtn = ({ comments }) => {
  return (
    <S.FooterContainer comments={comments}>
      <S.BtnContainer onClick={e => e.stopPropagation()}>
        <S.BtnWrap>
          <button>
            <Icon Icon={Heart} size={17} />
            <span>공감하기</span>
          </button>
        </S.BtnWrap>

        <S.BtnWrap>
          <button>
            <Icon Icon={Scrap} size={12} />
            <span>보관하기</span>
          </button>
        </S.BtnWrap>
      </S.BtnContainer>

      {comments ? (
        <S.BtnWrap>
          <button className="comment">
            <Icon Icon={Comment} size={16} />
            <span>댓글쓰기({comments})</span>
          </button>
        </S.BtnWrap>
      ) : (
        <S.DetailWrap>
          <span>17분 전</span>
          <span>조회 42</span>
        </S.DetailWrap>
      )}
    </S.FooterContainer>
  );
};
