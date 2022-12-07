import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { user } from 'api/queries/user';
import { Icon, ProfileImage } from 'components/Common';
import { ReactComponent as Plane } from 'assets/icons/airplane.svg';
import * as S from './styles';

export const ReplyForm = () => {
  const { data, isLoading } = useQuery(['user'], user.getProfile);
  const [replyValue, setReplyValue] = useState('');

  const handleReplyChange = e => {
    setReplyValue(e.target.value);
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
        <S.SendBtn>
          <Icon Icon={Plane} size={22} color={'#f4f4f4'} />
        </S.SendBtn>
      </S.CommentSendForm>

      <S.DragBar />
    </>
  );
};
