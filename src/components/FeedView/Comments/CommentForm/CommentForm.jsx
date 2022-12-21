import React, { useState } from 'react';

import { useMutation, useQuery, useQueryClient } from 'react-query';
import { user } from 'api/queries/user';
import { comments } from 'api/queries/comment';

import { toast } from 'react-toastify';
import { Icon, ProfileImage } from 'components/Common';
import { ReactComponent as Plane } from 'assets/icons/airplane.svg';
import * as S from './styles';

export const CommentForm = ({ feedId, replyId, isReplying, setIsReplying }) => {
  const { data, isLoading } = useQuery(['user'], user.getProfile);
  const [commentValue, setCommentValue] = useState('');

  const handleChange = e => {
    setCommentValue(e.target.value);
  };

  const queryClient = useQueryClient();

  // 댓글 등록
  const { mutate: sendCommentMutate } = useMutation(
    !isReplying ? comments.add : comments.reply,
    {
      onSuccess: () => {
        queryClient.invalidateQueries('comments');
        queryClient.invalidateQueries('feed-detail');
      },
      onError: error => {
        console.log(error.message);
        toast.error('댓글 등록에 실패했습니다. 다시 시도해주세요.');
      }
    }
  );

  const handleSendComment = e => {
    e.preventDefault();
    if (!isReplying && commentValue) {
      sendCommentMutate([{ feedId: feedId }, { content: commentValue }]);
      setCommentValue('');
    } else if (isReplying && commentValue) {
      sendCommentMutate([{ commentId: replyId }, { content: commentValue }]);
      setCommentValue('');
      setIsReplying(false);
    } else {
      toast.warning('내용을 입력해주세요. 🙇‍♀️');
    }
  };

  const handleEnter = e => {
    if (e.keyCode === 13) {
      if (!e.shiftKey) {
        handleSendComment(e);
      }
    }
  };

  return (
    <>
      <S.CommentSendForm onSubmit={handleSendComment}>
        <ProfileImage
          size={40}
          url={!isLoading ? data.profile_image_url : null}
        />

        <S.CommentInput
          value={commentValue}
          onChange={handleChange}
          onKeyDown={handleEnter}
          placeholder={
            !isReplying ? '댓글을 입력해주세요' : '답글을 입력해주세요'
          }
        />
        <S.SendBtn>
          <Icon Icon={Plane} size={20} color={'#f4f4f4'} />
        </S.SendBtn>
      </S.CommentSendForm>

      <S.DragBar />
    </>
  );
};
