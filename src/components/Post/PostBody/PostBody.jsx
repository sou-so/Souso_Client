import React from 'react';
import { CategoryTag, TextClamp } from 'components/Common';
import * as S from './styles';

export const PostBody = ({ postData }) => {
  const {
    category: { category_name },
    content
  } = postData;

  return (
    <S.BodyContainer>
      <CategoryTag name={category_name} />
      <TextClamp line={3}>{content}</TextClamp>
    </S.BodyContainer>
  );
};
