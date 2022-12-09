import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { user } from 'api/queries/user';
import { comments } from 'api/queries/comment';
import { EditDeleteButton, Icon, UserHeader } from 'components/Common';
import { EditForm } from '../EditForm/EditForm';
import { ReactComponent as Comment } from 'assets/icons/comment.svg';
import { dateFormat } from 'utils/dateConverter';
import * as S from './styles';

export const CommentContents = ({
  contents,
  feedAuthor,
  setIsReplying,
  setReplyId,
  setReplyNickname,
  reply
}) => {
  const { data, isLoading } = useQuery(['user'], user.getProfile);
  const { author, content, created_at, comment_id } = contents;

  const [isEditing, setIsEditing] = useState(false);

  const queryClient = useQueryClient();

  // 댓글 삭제
  const { mutate: deleteCommentMutate } = useMutation(comments.delete, {
    onSuccess: () => {
      toast.success('댓글이 성공적으로 삭제되었습니다.');
      queryClient.invalidateQueries('comments');
    },
    onError: error => {
      console.log(error.message);
      toast.error('댓글 삭제에 실패했습니다. 다시 시도해주세요.');
    }
  });

  // 답글버튼 클릭시 정보전달
  const handleReplying = e => {
    e.preventDefault();
    setIsReplying(true);
    setReplyId(comment_id);
    setReplyNickname(author.nickname);
  };

  return (
    <>
      <S.CommentHeader>
        <UserHeader data={contents} feedAuthor={feedAuthor} />
        {!isLoading && data.user_id === author.user_id && (
          <EditDeleteButton
            handleDelete={() => deleteCommentMutate(comment_id)}
            handleEdit={() => setIsEditing(prev => !prev)}
          />
        )}
      </S.CommentHeader>

      <S.CommentText>
        {isEditing ? (
          <EditForm
            content={content}
            commentId={comment_id}
            setIsEditing={setIsEditing}
          />
        ) : (
          <S.TextBox>{content}</S.TextBox>
        )}
      </S.CommentText>

      <S.CommentFooter className={reply ? 'onlyDate' : ''}>
        {!reply && (
          <button>
            <Icon Icon={Comment} size={17} />
            <span onClick={handleReplying} id={comment_id}>
              답글쓰기
            </span>
          </button>
        )}

        <div>{dateFormat(created_at)}</div>
      </S.CommentFooter>
    </>
  );
};
