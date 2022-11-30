import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { user } from 'api/queries/user';
import { comments } from 'api/queries/comment';
import { Icon, ProfileImage } from 'components/Common';
import { ReactComponent as Plane } from 'assets/icons/airplane.svg';
import * as S from './styles';

export const CommentForm = ({ feedId }) => {
  const { data, isLoading } = useQuery(['user'], user.getProfile);
  const [commentValue, setCommentValue] = useState('');

  // 댓글 등록
  const { mutate: sendComment } = useMutation(comments.add, {
    onSuccess: () => {
      console.log('댓글 등록 완료');
    },
    onError: error => {
      console.log(error.message);
    }
  });

  const handleChange = e => {
    setCommentValue(e.target.value);
  };

  const handleSendComment = e => {
    e.preventDefault();
    if (commentValue) {
      sendComment([{ feedId: feedId }, { content: commentValue }]);
    } else {
      alert('🙇‍♀️ 내용을 입력해주세요.');
    }
  };

  return (
    <S.InputContainer>
      <S.FormContainer>
        <ProfileImage
          size={40}
          url={!isLoading ? data.profile_image_url : null}
        />

        <S.Input
          value={commentValue}
          onChange={handleChange}
          placeholder="댓글을 입력해주세요"
        />
        <S.SendBtn onClick={handleSendComment}>
          <Icon Icon={Plane} size={22} color={'#f4f4f4'} />
        </S.SendBtn>
      </S.FormContainer>

      <S.DragBar />
    </S.InputContainer>
  );
};
