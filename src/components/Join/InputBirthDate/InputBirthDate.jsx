import React, { useEffect, useState } from 'react';
import { getAge } from 'utils/dateConverter';
import { Error } from '../Input/styles';
import * as S from './styles';

export const InputBirthDate = ({ birth, setBirth, setValues, errors }) => {
  const addZero = target => (target < 10 ? '0' + target : target);
  const removeZero = target => Number(target) + '';

  const [year, setYear] = useState(birth && birth.slice(0, 4));
  const [month, setMonth] = useState(birth && birth.slice(4, 6));
  const [day, setDay] = useState(birth && birth.slice(-2));
  const age = getAge(`${year}.${month}.${day}`);

  useEffect(() => {
    const bday = `${year}${month}${day}`;

    setBirth && setBirth(bday);
    setValues &&
      setValues(prev => ({
        ...prev,
        birth: bday
      }));
  }, [year, month, day, setBirth, setValues]);

  return (
    <>
      <S.InputContainer className={errors && errors['birth'] ? 'error' : ''}>
        <S.SelectBox
          name="year"
          defaultValue={birth ? year : 'year'}
          onChange={e => setYear(e.target.value)}
        >
          <option value="year" disabled>
            출생년도
          </option>
          {yearList()}
        </S.SelectBox>
        <S.SelectBox
          name="month"
          defaultValue={birth ? removeZero(month) : 'month'}
          onChange={e => setMonth(addZero(e.target.value))}
        >
          <option value="month" disabled>
            월
          </option>
          {monthList()}
        </S.SelectBox>
        <S.SelectBox
          name="day"
          defaultValue={birth ? removeZero(day) : 'day'}
          onChange={e => setDay(addZero(e.target.value))}
        >
          <option value="day" disabled>
            일
          </option>
          {dayList()}
        </S.SelectBox>
        <S.Age>
          <span>{age}</span>
        </S.Age>
      </S.InputContainer>
      {errors && errors['birth'] && <Error>{errors['birth']}</Error>}
    </>
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
