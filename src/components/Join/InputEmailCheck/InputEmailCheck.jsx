import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { Input } from 'components/Join';
import { join } from 'api/queries/join';
import { validate } from 'utils/valid_join';

export const InputEmailCheck = ({
  values,
  onChange,
  errors,
  isChecked,
  setIsChecked
}) => {
  const [, setRender] = useState(null);

  const { mutate } = useMutation(join.email, {
    onSuccess: () => {
      errors.email = '';
      setIsChecked(true); // 중복 확인 완료 시
    },
    onError: error => {
      if (error.response.status === 409) {
        errors.email = '이미 가입된 이메일입니다.';
      }
    }
  });

  const checkJoinedEmail = async e => {
    e.preventDefault();
    const email = values.email.replace('@', '%40');
    const errorMessage = await validate(values);

    errors.email = errorMessage.email || '';

    if (!errors.email) mutate(email);

    setRender(values);
  };

  useEffect(() => {
    setIsChecked(false);
  }, [setIsChecked, values.email]);

  return (
    <Input
      name="email"
      placeholder="souso@example.com"
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
