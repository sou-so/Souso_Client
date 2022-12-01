import React, { useEffect, useState } from 'react';
import { EmptyList, PageHeader, ScrollContainer } from 'components/Common';
import { MyMeets, SearchButton } from 'components/MySubPage';
import { monthDivider } from 'utils/monthDivider';
import data from 'data/mymeets';
import * as S from './styles';

export const MyMeetPage = () => {
  const [sections, setSections] = useState([]);
  const meetData = data.mymeets;

  const isEmpty = false;

  useEffect(() => {
    if (meetData) setSections(monthDivider(meetData));
  }, [meetData]);

  return (
    <S.PageContainer>
      <PageHeader title="소소모임" backTo="/mypage" />
      <SearchButton />

      <ScrollContainer padding>
        {isEmpty ? (
          <EmptyList message="모임에 참여한 기록이 없어요" />
        ) : (
          <S.MeetList>
            <h2>나의 참여 기록</h2>
            {sections.map((section, i) => (
              <MyMeets key={i} section={section} />
            ))}
          </S.MeetList>
        )}
      </ScrollContainer>
    </S.PageContainer>
  );
};
