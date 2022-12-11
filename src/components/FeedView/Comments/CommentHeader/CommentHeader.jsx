import React from 'react';
import { CategoryTag, ProfileImage } from 'components/Common';
import { getAge } from 'utils/dateConverter';
import * as S from './styles';

export const CommentHeader = ({ data, feedAuthor }) => {
  const {
    author: { birth, nickname, profile_image_url, location, user_id }
  } = data;

  const myFeed = feedAuthor === user_id && '글 작성자';

  const town = location && location.split(' ')[2];

  return (
    <S.HeaderContainer>
      <ProfileImage size={40} url={profile_image_url} />
      <S.UserInfo>
        <p className="name">{nickname}</p>
        <span className="age">{getAge(birth)}</span>
        <span className="town">{town || '상도동'}</span>
      </S.UserInfo>
      {myFeed && <CategoryTag name={myFeed} />}
    </S.HeaderContainer>
  );
};
