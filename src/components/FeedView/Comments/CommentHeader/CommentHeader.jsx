import React from 'react';

import { useMutation, useQuery, useQueryClient } from 'react-query';
import { user } from 'api/queries/user';
import { comments } from 'api/queries/comment';

import { toast } from 'react-toastify';
import { EditDeleteButton, LabelTag, ProfileImage } from 'components/Common';
import { dateFormat, getAge } from 'utils/dateConverter';
import * as S from './styles';

export const CommentHeader = ({ contents, feedAuthor, setIsEditing }) => {
  const { data, isLoading } = useQuery(['user'], user.getProfile);
  const {
    author: { birth, nickname, profile_image_url, location, user_id },
    created_at,
    comment_id
  } = contents;

  const myFeed = feedAuthor === user_id && '글 작성자';
  const town = location && location.split(' ')[2];

  const queryClient = useQueryClient();

  // 댓글 삭제
  const { mutate: deleteCommentMutate } = useMutation(comments.delete, {
    onSuccess: () => {
      toast.success('댓글이 성공적으로 삭제되었습니다.');
      queryClient.invalidateQueries('comments');
      queryClient.invalidateQueries('feed-detail');
    },
    onError: error => {
      console.log(error.message);
      toast.error('댓글 삭제에 실패했습니다. 다시 시도해주세요.');
    }
  });

  return (
    <S.HeaderContainer>
      <ProfileImage size={40} url={profile_image_url} />
      <S.UserInfo>
        <S.InfoBlock>
          <p className="name">{nickname}</p>
          {myFeed && <LabelTag name={myFeed} />}
        </S.InfoBlock>
        <S.InfoBlock>
          <span className="age">{getAge(birth)}</span>
          <span className="town">{town || '상도동'}</span>
        </S.InfoBlock>
      </S.UserInfo>

      {!isLoading && data.user_id === user_id && (
        <EditDeleteButton
          handleDelete={() => deleteCommentMutate(comment_id)}
          handleEdit={() => setIsEditing(prev => !prev)}
        />
      )}
      <S.DateWrap>{dateFormat(created_at)}</S.DateWrap>
    </S.HeaderContainer>
  );
};
