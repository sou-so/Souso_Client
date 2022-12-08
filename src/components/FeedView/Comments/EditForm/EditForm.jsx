import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { comments } from 'api/queries/comment';
import { toast } from 'react-toastify';
import * as S from './styles';

export const EditForm = ({ content, commentId, setIsEditing }) => {
  const [editValue, setEditValue] = useState(content);

  const queryClient = useQueryClient();

  const handleChange = e => {
    setEditValue(e.target.value);
  };

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

  const handleEditComment = e => {
    e.preventDefault();
    editCommentMutate([{ commentId: commentId }, { content: editValue }]);
    setIsEditing(prev => !prev);
  };

  return (
    <S.EditingForm onSubmit={handleEditComment}>
      <S.EditInput value={editValue} onChange={handleChange} />
      <button onClick={handleEditComment}>완료</button>
    </S.EditingForm>
  );
};
