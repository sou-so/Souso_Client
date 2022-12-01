import React from 'react';
import { useMutation, useQuery } from 'react-query';
import { user } from 'api/queries/user';
import { EditDeleteButton, Icon, ProfileImage } from 'components/Common';
import { ReactComponent as Comment } from 'assets/icons/comment.svg';
import { fromNow, getDate } from 'utils/dateConverter';
import * as S from './styles';
import { comments } from 'api/queries/comment';

export const CommentContents = ({ contents, feedAuthor }) => {
  const { data, isLoading } = useQuery(['user'], user.getProfile);
  const { author, content, created_at, comment_id } = contents;

  const { mutate: commentDelete } = useMutation(comments.delete, {
    onSuccess: res => {
      console.log(res);
      alert('댓글이 성공적으로 삭제되었습니다.');
    },
    onError: error => {
      console.log(error.message);
      alert('댓글 삭제에 실패했습니다. 다시 시도해주세요.');
    }
  });

  return (
    <>
      <S.CommentHeader>
        <S.UserInfo>
          <ProfileImage size={40} url={author.profile_image_url} />
          <p>{author.nickname}</p>
          {!isLoading && feedAuthor === author.user_id && (
            <S.WriterTag>글 작성자</S.WriterTag>
          )}
        </S.UserInfo>

        {!isLoading && data.user_id === author.user_id && (
          <EditDeleteButton handleDelete={() => commentDelete(comment_id)} />
        )}
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
