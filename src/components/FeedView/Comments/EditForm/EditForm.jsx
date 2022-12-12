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
    if (editValue !== '') {
      editCommentMutate([{ commentId: commentId }, { content: editValue }]);
      setIsEditing(prev => !prev);
    } else {
      toast.warning('수정할 내용을 입력해주세요.');
    }
  };

  const handleEnter = e => {
    if (e.keyCode === 13) {
      if (!e.shiftKey) {
        handleEditComment(e);
      }
    }
  };

  return (
    <S.EditingForm onSubmit={handleEditComment}>
      <S.EditInput
        value={editValue}
        onChange={handleChange}
        onKeyDown={handleEnter}
      />
      <button onClick={handleEditComment}>완료</button>
    </S.EditingForm>
  );
};
