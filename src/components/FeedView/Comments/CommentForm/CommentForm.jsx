import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { user } from 'api/queries/user';
import { comments } from 'api/queries/comment';
import { Icon, ProfileImage } from 'components/Common';
import { ReactComponent as Plane } from 'assets/icons/airplane.svg';
import * as S from './styles';

export const CommentForm = ({ feedId }) => {
  const { data, isLoading } = useQuery(['user'], user.getProfile);
  const [commentValue, setCommentValue] = useState('');

  const handleChange = e => {
    setCommentValue(e.target.value);
  };

  const queryClient = useQueryClient();

  // 댓글 등록
  const { mutate: sendCommentMutate } = useMutation(comments.add, {
    onSuccess: () => {
      queryClient.invalidateQueries('comments');
      queryClient.invalidateQueries('feed-detail');
    },
    onError: error => {
      console.log(error.message);
      toast.error('댓글 등록에 실패했습니다. 다시 시도해주세요.');
    }
  });

  const handleSendComment = e => {
    e.preventDefault();
    if (commentValue) {
      sendCommentMutate([{ feedId: feedId }, { content: commentValue }]);
      setCommentValue('');
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
          value={commentValue}
          onChange={handleChange}
          placeholder="댓글을 입력해주세요"
        />
        <S.SendBtn onClick={handleSendComment}>
          <Icon Icon={Plane} size={20} color={'#f4f4f4'} />
        </S.SendBtn>
      </S.CommentSendForm>

      <S.DragBar />
    </>
  );
};
