import React from 'react';
import { TextClamp } from 'components/Common';
import { getDay } from 'utils/dateConverter';
import * as S from './styles';

export const ComingMeetup = ({ meet }) => {
  const { date, img, name, keywords, isJoined } = meet;

  return (
    <S.MeetupItem>
      <span className="day">{getDay(date)}</span>
      <img src={img} alt="" />
      <TextClamp width={85}>{name}</TextClamp>
      <S.Keywords>
        {keywords.slice(0, 2).map((keyword, i) => (
          <span key={i}>#{keyword}</span>
        ))}
      </S.Keywords>
      {isJoined ? (
        <S.JoinButton>참여 신청</S.JoinButton>
      ) : (
        <S.JoinButton className="disabled">참여 확정</S.JoinButton>
      )}
    </S.MeetupItem>
  );
};
