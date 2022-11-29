import React from 'react';
import { Icon, ProfileImage } from 'components/Common';
import { ReactComponent as Comment } from 'assets/icons/comment.svg';
import { fromNow } from 'utils/dateConverter';
import * as S from './styles';

export const CommentContents = ({ contents }) => {
  const { author, content, created_at } = contents;
  const time = fromNow(created_at);

  return (
    <>
      <S.CommentUser>
        <ProfileImage size={40} url={author.profile_image_url} />
        <p>{author.nickname}</p>
      </S.CommentUser>

      <S.CommentText>{content}</S.CommentText>

      <S.CommentFooter>
        <button>
          <Icon Icon={Comment} size={17} />
          <span>답글쓰기</span>
        </button>

        <p>{time}분 전</p>
      </S.CommentFooter>
    </>
  );
};
