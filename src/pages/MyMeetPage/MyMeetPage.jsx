import React, { useEffect, useState } from 'react';
import { PageHeader, ScrollContainer } from 'components/Common';
import { MyMeets, SearchButton } from 'components/MySubPage';
import { monthDivider } from 'utils/monthDivider';
import data from 'data/mymeets';
import * as S from './styles';

export const MyMeetPage = () => {
  const [sections, setSections] = useState([]);
  const meetData = data.mymeets;

  useEffect(() => {
    if (meetData) setSections(monthDivider(meetData));
  }, [meetData]);

  return (
    <S.PageContainer>
      <PageHeader title="소소모임" backTo="/mypage" />
      <SearchButton />
      <ScrollContainer padding>
        <h2>나의 참여 기록</h2>
        <S.MeetList>
          {sections.map((section, i) => (
            <MyMeets key={i} section={section} />
          ))}
        </S.MeetList>
      </ScrollContainer>
    </S.PageContainer>
  );
};
