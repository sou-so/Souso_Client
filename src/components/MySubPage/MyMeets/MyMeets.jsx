import React from 'react';
import { Link } from 'react-router-dom';
import { LabelTag, TextClamp } from 'components/Common';
import { getDay, isPast } from 'utils/dateConverter';
import * as S from './styles';

export const MyMeets = ({ section }) => {
  const [month, meets] = section;

  return (
    <S.MonthSection>
      <S.Month>{month}</S.Month>
      {meets.map(({ date, name }, i) => (
        <S.MeetItem key={i} opacity={1 / (i + 1)}>
          <span>{getDay(date)}</span>
          <S.MeetTitle>
            <TextClamp width={!isPast(date) ? 265 : 0}>{name}</TextClamp>
            {!isPast(date) && <LabelTag name="참여예정" />}
          </S.MeetTitle>
          <Link to="#">자세히 보기</Link>
        </S.MeetItem>
      ))}
    </S.MonthSection>
  );
};
