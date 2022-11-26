import React, { useEffect, useState } from 'react';
import { getAge } from 'utils/dateConverter';
import * as S from './styles';

export const InputBirthDate = ({ birth, setBirth }) => {
  const [year, setYear] = useState(birth ? birth.split('.')[0] : '1999');
  const [month, setMonth] = useState(birth ? birth.split('.')[1] : '1');
  const [day, setDay] = useState(birth ? birth.split('.')[2] : '1');
  const age = getAge(`${year}.${month}.${day}`);

  useEffect(() => {
    setBirth(`${year}.${month}.${day}`);
  }, []);

  return (
    <S.InputContainer>
      <S.SelectBox
        defaultValue={birth ? birth.split('.')[0] : 'year'}
        onChange={e => setYear(e.target.value)}
      >
        <option value="year" disabled>
          출생년도
        </option>
        {yearList()}
      </S.SelectBox>
      <S.SelectBox
        defaultValue={birth ? birth.split('.')[1] : 'month'}
        onChange={e => setMonth(e.target.value)}
      >
        <option value="month" disabled>
          월
        </option>
        {monthList()}
      </S.SelectBox>
      <S.SelectBox
        defaultValue={birth ? birth.split('.')[2] : 'day'}
        onChange={e => setDay(e.target.value)}
      >
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
