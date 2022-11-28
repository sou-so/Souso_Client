import React from 'react';
import { Icon } from 'components/Common';
import { ReactComponent as Heart } from 'assets/icons/heart.svg';
import { ReactComponent as Scrap } from 'assets/icons/scrap.svg';
import { ReactComponent as Comment } from 'assets/icons/comment.svg';
import { fromNow, getDate } from 'utils/dateConverter';
import * as S from './styles';

export const PostFooterIcon = ({ postData, hasDate }) => {
  const { like_count, bookmark_count, created_at } = postData;
  const comment_count = 10;

  return (
    <S.FooterContainer>
      <S.IconList hasDate>
        <li>
          <Icon Icon={Heart} size={12} />
          {like_count}
        </li>
        <li>
          <Icon Icon={Comment} size={13} />
          {comment_count}
        </li>
        <li>
          <Icon Icon={Scrap} size={9} />
          {bookmark_count}
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
