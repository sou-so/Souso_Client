import React from 'react';
import { CategoryTag, ProfileImage, TextClamp } from 'components/Common';
import { getAge } from 'utils/dateConverter';
import * as S from './styles';

export const PostBodyUser = ({ postData, view }) => {
  const {
    author: { birth, nickname, profile_image_url },
    category: { category_name },
    content
  } = postData;

  return (
    <S.BodyContainer>
      <S.PostUser>
        <ProfileImage size={31} url={profile_image_url} />
        <S.UserInfo>
          <p className="name">{nickname}</p>
          <span className="age">{getAge(birth)}</span>
          {view && <span className="town">둔촌동</span>}
        </S.UserInfo>
        {!view && <CategoryTag name={category_name} />}
      </S.PostUser>

      <S.PostText>
        {view ? <p>{content}</p> : <TextClamp line={3}>{content}</TextClamp>}
      </S.PostText>
    </S.BodyContainer>
  );
};
