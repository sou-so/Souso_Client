import React, { useEffect, useState } from 'react';
import { getAge } from 'utils/dateConverter';
import * as S from './styles';

export const InputBirthDate = ({ setBirth }) => {
  const [year, setYear] = useState('1999');
  const [month, setMonth] = useState('1');
  const [day, setDay] = useState('1');
  const age = getAge(`${year}.${month}.${day}`);

  useEffect(() => {
    setBirth(`${year}.${month}.${day}`);
  }, []);

  return (
    <S.InputContainer>
      <S.SelectBox defaultValue="year" onChange={e => setYear(e.target.value)}>
        <option value="year" disabled>
          출생년도
        </option>
        {yearList()}
      </S.SelectBox>
      <S.SelectBox
        defaultValue="month"
        onChange={e => setMonth(e.target.value)}
      >
        <option value="month" disabled>
          월
        </option>
        {monthList()}
      </S.SelectBox>
      <S.SelectBox defaultValue="day" onChange={e => setDay(e.target.value)}>
        <option value="day" disabled>
          일
        </option>
        {dayList()}
      </S.SelectBox>
      <S.Age>
        <span>{age[0]} 학년</span> <span>{age[1]} 반</span>
      </S.Age>
    </S.InputContainer>
  );
};

const yearList = () => {
  const thisYear = new Date().getFullYear();
  const years = [];
  for (let i = 1999; i > thisYear - 70; i--) {
    years.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  return years;
};

const monthList = () => {
  const months = [];
  for (let i = 1; i <= 12; i++) {
    months.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  return months;
};

const dayList = () => {
  const days = [];
  for (let i = 1; i <= 31; i++) {
    days.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  return days;
};
