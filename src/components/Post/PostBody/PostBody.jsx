import React from 'react';
import { CategoryTag, TextClamp } from 'components/Common';
import * as S from './styles';

export const PostBody = ({ data }) => {
  const { category, text } = data;

  return (
    <S.BodyContainer>
      <CategoryTag name={category} />
      <TextClamp line={3}>{text}</TextClamp>
    </S.BodyContainer>
  );
};
