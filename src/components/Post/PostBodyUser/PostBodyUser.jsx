import React from 'react';
import { useLocation } from 'react-router-dom';
import { TextClamp, UserHeader } from 'components/Common';
import * as S from './styles';

export const PostBodyUser = ({ postData }) => {
  const { content } = postData;
  const { pathname } = useLocation();
  const isMain = pathname === '/';

  return (
    <S.BodyContainer>
      <UserHeader data={postData} />
      <S.PostText>
        {isMain || pathname.includes('list') ? (
          <TextClamp line={3}>{content}</TextClamp>
        ) : (
          <p>{content}</p>
        )}
      </S.PostText>
    </S.BodyContainer>
  );
};
