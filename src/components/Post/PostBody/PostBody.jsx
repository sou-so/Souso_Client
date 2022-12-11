import React from 'react';
import { LabelTag, TextClamp } from 'components/Common';
import * as S from './styles';

export const PostBody = ({ postData }) => {
  const {
    category: { category_name },
    content
  } = postData;

  return (
    <S.BodyContainer>
      <LabelTag name={category_name} />
      <TextClamp line={3}>{content}</TextClamp>
    </S.BodyContainer>
  );
};
