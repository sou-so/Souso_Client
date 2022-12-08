import React from 'react';
import { InComplete, ScrollContainer } from 'components/Common';
import { CategoryHorizon } from 'components/Meet';
import * as C from 'components/CommonMain';
import * as S from './styles';

export const MeetPage = () => {
  return (
    <S.PageContainer>
      <C.MainHeader />
      <ScrollContainer>
        <S.SectionWrap>
          <C.MainBanner text={['함께 책읽고 소소한', '얘기 나눌래요?']} />
          <C.SearchBar placeholder="관심있는 소모임을 검색하세요" />
          <C.HashTags />
        </S.SectionWrap>

        <InComplete />
        {/* <S.CategoryWrap>
          <h3>어떤 분야에 관심 있으세요?</h3>
          <CategoryHorizon />
        </S.CategoryWrap> */}
      </ScrollContainer>
    </S.PageContainer>
  );
};
