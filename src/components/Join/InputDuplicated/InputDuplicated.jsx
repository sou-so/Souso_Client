import React from 'react';
import { Input } from 'components/Join';

export const InputDuplicated = ({
  values,
  onChange,
  errors,
  isUnique,
  setIsUnique
}) => {
  const checkDuplicate = e => {
    e.preventDefault();
    setIsUnique(true); // 중복 확인 완료 시
  };

  return (
    <Input
      name="nickname"
      placeholder="닉네임"
      onChange={onChange}
      values={values}
      errors={errors}
    >
      <button onClick={checkDuplicate} className={isUnique ? 'done' : ''}>
        {isUnique ? '사용 가능' : '중복 확인'}
      </button>
    </Input>
  );
};
