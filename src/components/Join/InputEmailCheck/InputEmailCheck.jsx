import React, { useEffect } from 'react';
import { useMutation } from 'react-query';
import { Input } from 'components/Join';
import { join } from 'api/queries/join';

export const InputEmailCheck = ({
  values,
  onChange,
  errors,
  isChecked,
  setIsChecked
}) => {
  const { mutate } = useMutation(join.email, {
    onSuccess: () => {
      errors.email = '';
      setIsChecked(true); // 중복 확인 완료 시
    },
    onError: error => {
      errors.email = '이미 가입된 이메일입니다.';
      console.log(error.message); // 중복이면 409 error
    }
  });

  console.log(values);

  const checkJoinedEmail = e => {
    e.preventDefault();
    const email = values.email;
    const data = email.split('@');
    mutate(data);
  };

  useEffect(() => {
    setIsChecked(false);
  }, [setIsChecked, values.email]);

  return (
    <Input
      name="email"
      placeholder="numble@example.com"
      onChange={onChange}
      values={values}
      errors={errors}
    >
      <button onClick={checkJoinedEmail} className={isChecked ? 'done' : ''}>
        {isChecked ? '사용 가능' : '중복 확인'}
      </button>
    </Input>
  );
};
