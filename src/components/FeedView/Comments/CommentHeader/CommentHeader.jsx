import React from 'react';
import { LabelTag, ProfileImage } from 'components/Common';
import { getAge } from 'utils/dateConverter';
import * as S from './styles';

export const CommentHeader = ({ contents, feedAuthor }) => {
  const {
    author: { birth, nickname, profile_image_url, location, user_id }
  } = contents;

  const myFeed = feedAuthor === user_id && '글 작성자';

  const town = location && location.split(' ')[2];

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
    </S.HeaderContainer>
  );
};
