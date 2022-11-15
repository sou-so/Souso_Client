import React from 'react';
import { CategoryTag, ProfileImage, TextClamp } from 'components/Common';
import * as S from './styles';

export const PostBodyUser = ({ data, view }) => {
  const { user, category, text } = data;

  return (
    <S.BodyContainer>
      <S.PostUser>
        <ProfileImage size={31} url={user.profile_img} />
        <S.UserInfo>
          <p className="name">{user.name}</p>
          <span className="age">{user.age}</span>
          {view && <span className="town">둔촌동</span>}
        </S.UserInfo>
        {!view && <CategoryTag name={category} />}
      </S.PostUser>

      <S.PostText>
        {view ? <p>{text}</p> : <TextClamp line={3}>{text}</TextClamp>}
      </S.PostText>
    </S.BodyContainer>
  );
};
