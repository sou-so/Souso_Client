import React from 'react';
import { getDay } from 'utils/dateConverter';
import data from 'data/comingmeets';
import * as S from './styles';

export const ComingMeetup = () => {
  return (
    <ul>
      {data.meetups.map(({ date, img, name, keywords, isJoined }, i) => (
        <S.MeetupItem key={i}>
          <span className="day">{getDay(date)}</span>
          <img src={img} alt="" />
          <span className="name">{name}</span>
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
      ))}
    </ul>
  );
};
