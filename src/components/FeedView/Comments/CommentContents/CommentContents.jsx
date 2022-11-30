import React from 'react';
import { Icon, ProfileImage } from 'components/Common';
import { ReactComponent as Comment } from 'assets/icons/comment.svg';
import { ReactComponent as Dots } from 'assets/icons/dots.svg';
import { fromNow, getDate } from 'utils/dateConverter';
import * as S from './styles';

export const CommentContents = ({ contents }) => {
  const { author, content, created_at } = contents;

  return (
    <>
      <S.CommentHeader>
        <S.UserInfo>
          <ProfileImage size={40} url={author.profile_image_url} />
          <p className="userName">{author.nickname}</p>
        </S.UserInfo>

        <S.ButtonWrap>
          <Icon Icon={Dots} />
        </S.ButtonWrap>
      </S.CommentHeader>

      <S.CommentText>{content}</S.CommentText>

      <S.CommentFooter>
        <button>
          <Icon Icon={Comment} size={17} />
          <span>답글쓰기</span>
        </button>

        <div>
          {getDate(created_at) === getDate(new Date())
            ? fromNow(created_at)
            : getDate(created_at)}
        </div>
      </S.CommentFooter>
    </>
  );
};
