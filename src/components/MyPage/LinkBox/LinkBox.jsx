import React from 'react';
import { Icon } from 'components/Common';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';

export const LinkBox = ({ icon, name, myposts, bookmarks, meets, linkTo }) => {
  const navigate = useNavigate();

  return (
    <S.LinkBoxContainer onClick={() => navigate(`${linkTo}`)}>
      <Icon Icon={icon} size={14} color="#fff" />
      <S.BoxName>{name}</S.BoxName>

      {myposts && (
        <S.Count>
          {myposts.post} <span>글</span>
          {myposts.comment} <span>댓글</span>
        </S.Count>
      )}
      {bookmarks && (
        <S.Count>
          {bookmarks} <span>글</span>
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
