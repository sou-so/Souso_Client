import React from 'react';
import { Icon, ProfileImage } from 'components/Common';
import { ReactComponent as Comment } from 'assets/icons/comment.svg';
import * as S from './styles';

export const CommentContents = ({ contents }) => {
  return (
    <>
      <S.CommentUser>
        <ProfileImage size={40} url={contents.user.profile_img} />
        <p>{contents.user.name}</p>
      </S.CommentUser>

      <S.CommentText>{contents.text}</S.CommentText>

      <S.CommentFooter>
        <button>
          <Icon Icon={Comment} size={17} />
          <span>답글쓰기</span>
        </button>

        <p>{contents.time}분 전</p>
      </S.CommentFooter>
    </>
  );
};
