import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { user } from 'api/queries/user';
import { comments } from 'api/queries/comment';
import { EditDeleteButton, Icon, ProfileImage } from 'components/Common';
import { ReactComponent as Comment } from 'assets/icons/comment.svg';
import { dateFormat } from 'utils/dateConverter';
import * as S from './styles';

export const CommentContents = ({
  contents,
  feedAuthor,
  setIsReplying,
  setReplyId,
  setReplyNickname
}) => {
  const { data, isLoading } = useQuery(['user'], user.getProfile);
  const { author, content, created_at, comment_id } = contents;

  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(content);

  const queryClient = useQueryClient();

  // 댓글 수정
  const { mutate: editCommentMutate } = useMutation(comments.edit, {
    onSuccess: () => {
      toast.success('댓글이 수정되었습니다!');
      queryClient.invalidateQueries('comments');
    },
    onError: error => {
      console.log(error.message);
      toast.error('댓글 수정에 실패했습니다. 다시 시도해주세요.');
    }
  });

  const handleChange = e => {
    setEditValue(e.target.value);
  };

  const handleEditComment = e => {
    e.preventDefault();
    editCommentMutate([{ commentId: comment_id }, { content: editValue }]);
    setIsEditing(prev => !prev);
  };

  // 댓글 삭제
  const { mutate: deleteCommentMutate } = useMutation(comments.delete, {
    onSuccess: res => {
      console.log(res);
      toast.success('댓글이 성공적으로 삭제되었습니다.');
      queryClient.invalidateQueries('comments');
    },
    onError: error => {
      console.log(error.message);
      toast.error('댓글 삭제에 실패했습니다. 다시 시도해주세요.');
    }
  });

  const handleReplying = e => {
    e.preventDefault();
    setIsReplying(true);
    setReplyId(comment_id);
    setReplyNickname(author.nickname);
  };

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
          <EditDeleteButton
            handleDelete={() => deleteCommentMutate(comment_id)}
            handleEdit={() => setIsEditing(prev => !prev)}
          />
        )}
      </S.CommentHeader>

      <S.CommentText>
        {isEditing ? (
          <S.EditingForm onSubmit={handleEditComment}>
            <S.EditInput value={editValue} onChange={handleChange} />
            <button onClick={handleEditComment}>완료</button>
          </S.EditingForm>
        ) : (
          <S.TextBox>{content}</S.TextBox>
        )}
      </S.CommentText>

      <S.CommentFooter>
        <button>
          <Icon Icon={Comment} size={17} />
          <span onClick={handleReplying} id={comment_id}>
            답글쓰기
          </span>
        </button>

        <div>{dateFormat(created_at)}</div>
      </S.CommentFooter>
    </>
  );
};
