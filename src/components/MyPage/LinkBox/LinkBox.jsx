import React from 'react';
import { Icon } from 'components/Common';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';

export const LinkBox = ({ icon, name, myposts, scraps, meets, linkTo }) => {
  const navigate = useNavigate();

  return (
    <S.LinkBoxContainer onClick={() => navigate(`${linkTo}`)}>
      <Icon Icon={icon} size={14} color="#fff" />
      <S.BoxName>{name}</S.BoxName>

      {myposts && (
        <S.Count>
          {myposts.post} <span>게시글</span>
          {myposts.comment} <span>댓글</span>
        </S.Count>
      )}
      {scraps && (
        <S.Count>
          {scraps} <span>글</span>
        </S.Count>
      )}
      {meets && (
        <S.Count>
          {meets} <span>모임</span>
        </S.Count>
      )}
    </S.LinkBoxContainer>
  );
};
