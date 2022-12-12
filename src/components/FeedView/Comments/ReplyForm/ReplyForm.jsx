import React, { useState } from 'react';

import { useMutation, useQuery, useQueryClient } from 'react-query';
import { user } from 'api/queries/user';
import { comments } from 'api/queries/comment';

import { toast } from 'react-toastify';
import { Icon, ProfileImage } from 'components/Common';
import { ReactComponent as Plane } from 'assets/icons/airplane.svg';
import * as S from './styles';

export const ReplyForm = ({ setIsReplying, replyId }) => {
  const { data, isLoading } = useQuery(['user'], user.getProfile);
  const [replyValue, setReplyValue] = useState('');

  const handleReplyChange = e => {
    setReplyValue(e.target.value);
  };

  const queryClient = useQueryClient();

  // 답글 등록
  const { mutate: replyMutate } = useMutation(comments.reply, {
    onSuccess: () => {
      queryClient.invalidateQueries('comments');
      queryClient.invalidateQueries('feed-detail');
    },
    onError: error => {
      console.log(error.message);
      toast.error('답글 등록에 실패했습니다. 다시 시도해주세요.');
    }
  });

  const handleSendReply = e => {
    e.preventDefault();
    if (replyValue) {
      replyMutate([{ commentId: replyId }, { content: replyValue }]);
      setReplyValue('');
      setIsReplying(false);
    } else {
      toast.warning('내용을 입력해주세요. 🙇‍♀️');
    }
  };

  const handleEnter = e => {
    if (e.keyCode === 13) {
      if (!e.shiftKey) {
        handleSendReply(e);
      }
    }
  };

  return (
    <>
      <S.CommentSendForm onSubmit={handleSendReply}>
        <ProfileImage
          size={40}
          url={!isLoading ? data.profile_image_url : null}
        />

        <S.CommentInput
          value={replyValue}
          onChange={handleReplyChange}
          onKeyDown={handleEnter}
          placeholder="답글을 입력해주세요"
        ></S.CommentInput>
        <S.SendBtn>
          <Icon Icon={Plane} size={20} color={'#f4f4f4'} />
        </S.SendBtn>
      </S.CommentSendForm>

      <S.DragBar />
    </>
  );
};
