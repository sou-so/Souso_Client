import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { Icon } from 'components/Common';
import { ReactComponent as Heart } from 'assets/icons/heart.svg';
import { ReactComponent as Bookmark } from 'assets/icons/bookmark.svg';
import { ReactComponent as Comment } from 'assets/icons/comment.svg';
import { feed } from 'api/queries/feed';
import * as S from './styles';

export const PostFooterBtn = ({ postData, comments, refetch }) => {
  const { feed_id, is_bookmark, bookmark_count } = postData;
  const [bookmarked, setBookmarked] = useState(is_bookmark);

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
          <S.Bookmark
            onClick={() => handleBookmark(feed_id)}
            className={bookmarked ? 'bookmarked' : ''}
          >
            <Icon Icon={Bookmark} size={12} />
            <span>보관하기({bookmark_count})</span>
          </S.Bookmark>
        </S.BtnWrap>
      </S.BtnContainer>

      {comments ? (
        <S.BtnWrap>
          <S.Comment>
            <Icon Icon={Comment} size={16} />
            <span>댓글쓰기({comments})</span>
          </S.Comment>
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
