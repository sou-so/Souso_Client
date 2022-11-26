import React, { useEffect } from 'react';
import { useMutation } from 'react-query';
import { Input } from 'components/Join';
import { join } from 'api/queries/join';

export const InputDuplicated = ({
  values,
  onChange,
  errors,
  isUnique,
  setIsUnique
}) => {
  const { mutate } = useMutation(join.nickname, {
    onSuccess: () => {
      errors.nickname = '';
      setIsUnique(true); // 중복 확인 완료 시
    },
    onError: error => {
      errors.nickname = '이미 사용 중인 닉네임입니다.';
      console.log(error.message); // 중복이면 409 error
    }
  });

  const checkDuplicate = e => {
    e.preventDefault();
    mutate(values.nickname);
  };

  useEffect(() => {
    setIsUnique(false);
  }, [setIsUnique, values.nickname]);

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
