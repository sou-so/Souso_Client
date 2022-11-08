import React, { createRef } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import * as S from './styles';

const tags = ['맛집', '모임 카페 추천', '자녀 학교생활', '나들이 공원', '육아'];

export const HashTags = () => {
  const scrollRef = createRef();

  return (
    <ScrollContainer className="container">
      <S.HashTagsList ref={scrollRef}>
        {tags.concat(tags).map((tag, i) => (
          <li key={i}>{tag}</li>
        ))}
      </S.HashTagsList>
    </ScrollContainer>
  );
};
