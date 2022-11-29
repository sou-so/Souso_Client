import React from 'react';
import { Icon } from 'components/Common';
import { ReactComponent as Heart } from 'assets/icons/heart.svg';
import { ReactComponent as Bookmark } from 'assets/icons/bookmark.svg';
import { ReactComponent as Comment } from 'assets/icons/comment.svg';
import { fromNow, getDate } from 'utils/dateConverter';
import * as S from './styles';

export const PostFooterIcon = ({ postData, hasDate }) => {
  const {
    like_count,
    bookmark_count,
    comment_count,
    created_at,
    is_like,
    is_bookmark
  } = postData;

  return (
    <S.FooterContainer>
      <S.IconList hasDate>
        <li className={is_like && 'liked'}>
          <Icon Icon={Heart} size={12} />
          {like_count}
        </li>
        <li className={is_bookmark && 'bookmarked'}>
          <Icon Icon={Bookmark} size={9} />
          {bookmark_count}
        </li>
        <li>
          <Icon Icon={Comment} size={13} />
          {comment_count}
        </li>
      </S.IconList>
      {hasDate && (
        <S.Date>
          {getDate(created_at) === getDate(new Date())
            ? fromNow(created_at)
            : getDate(created_at)}
        </S.Date>
      )}
    </S.FooterContainer>
  );
};
