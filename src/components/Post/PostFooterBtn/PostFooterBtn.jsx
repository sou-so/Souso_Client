import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { feed } from 'api/queries/feed';
import { Icon } from 'components/Common';
import { ReactComponent as Heart } from 'assets/icons/heart.svg';
import { ReactComponent as Bookmark } from 'assets/icons/bookmark.svg';
import { ReactComponent as Comment } from 'assets/icons/comment.svg';
import { fromNow } from 'utils/dateConverter';

import * as S from './styles';

export const PostFooterBtn = ({ postData, hasComment, refetch }) => {
  const {
    feed_id,
    is_bookmark,
    bookmark_count,
    is_like,
    like_count,
    created_at,
    view_count,
    comment_count
  } = postData;
  const [bookmarked, setBookmarked] = useState(is_bookmark);
  const [liked, setLiked] = useState(is_like);

  const { mutate: handleBookmark } = useMutation(
    bookmarked ? feed.removeBookmark : feed.addBookmark,
    {
      onSuccess: () => {
        setBookmarked(prev => !prev);
        refetch();
      },
      onError: error => {
        console.log(error.message);
      }
    }
  );
  const { mutate: handleLike } = useMutation(
    liked ? feed.removeLike : feed.addLike,
    {
      onSuccess: () => {
        setLiked(prev => !prev);
        refetch();
      },
      onError: error => {
        console.log(error.message);
      }
    }
  );

  return (
    <S.FooterContainer hasComment>
      <S.BtnContainer onClick={e => e.stopPropagation()}>
        <S.BtnWrap>
          <S.Like
            onClick={() => handleLike(feed_id)}
            className={liked ? 'liked' : ''}
          >
            <Icon Icon={Heart} size={17} />
            <span>공감({like_count})</span>
          </S.Like>
        </S.BtnWrap>

        <S.BtnWrap>
          <S.Bookmark
            onClick={() => handleBookmark(feed_id)}
            className={bookmarked ? 'bookmarked' : ''}
          >
            <Icon Icon={Bookmark} size={12} />
            <span>보관({bookmark_count})</span>
          </S.Bookmark>
        </S.BtnWrap>
      </S.BtnContainer>

      {hasComment ? (
        <S.BtnWrap>
          <S.Comment>
            <Icon Icon={Comment} size={16} />
            <span>댓글({comment_count})</span>
          </S.Comment>
        </S.BtnWrap>
      ) : (
        <S.DetailWrap>
          <span>{fromNow(created_at)}</span>
          <span>{view_count}</span>
        </S.DetailWrap>
      )}
    </S.FooterContainer>
  );
};
