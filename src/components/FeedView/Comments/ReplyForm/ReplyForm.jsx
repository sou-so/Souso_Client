import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { user } from 'api/queries/user';
import { comments } from 'api/queries/comment';
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

  return (
    <>
      <S.CommentSendForm>
        <ProfileImage
          size={40}
          url={!isLoading ? data.profile_image_url : null}
        />

        <S.CommentInput
          value={replyValue}
          onChange={handleReplyChange}
          placeholder="답글을 입력해주세요"
        />
        <S.SendBtn onClick={handleSendReply}>
          <Icon Icon={Plane} size={22} color={'#f4f4f4'} />
        </S.SendBtn>
      </S.CommentSendForm>

      <S.DragBar />
    </>
  );
};
