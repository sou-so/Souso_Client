import React, { useState, useEffect } from 'react';
import { Input } from 'components/Join';
import { useMutation } from 'react-query';
import { join } from 'api/queries/join';

export const InputVerified = ({
  values,
  onChange,
  errors,
  isVerified,
  setIsVerified
}) => {
  const [isSent, setIsSent] = useState(false);

  // 인증번호 발송
  const { mutate: checkingCode } = useMutation(join.sendCode, {
    onSuccess: res => {
      console.log(res);
      alert('메세지가 발송되었습니다 ✉');
      setIsSent(true);
    },
    onError: error => {
      console.log(error.message);
    }
  });

  const codeSending = e => {
    e.preventDefault();
    checkingCode({ phone_number: values.phone_number });
  };

  // 인증번호 확인
  const { mutate: verifying } = useMutation(join.verifyCode, {
    onSuccess: () => {
      errors.verified_code = '';
      alert('휴대폰 인증 성공 🎉');
      setIsVerified(true);
    },
    onError: error => {
      errors.verified_code = '인증번호가 일치하지 않습니다.';
      console.log(error.message);
    }
  });

  const verification = e => {
    e.preventDefault();
    verifying(values);
  };

  useEffect(() => {
    setIsSent(false);
  }, [setIsSent, values.phone_number]);

  return (
    <>
      <Input
        name="phone_number"
        placeholder="핸드폰 번호"
        onChange={onChange}
        values={values}
        errors={errors}
      >
        <button onClick={codeSending}>
          {isSent ? '인증번호 재발송' : '인증번호 발송'}
        </button>
      </Input>

      <Input
        name="verified_code"
        placeholder="인증번호를 입력하세요"
        onChange={onChange}
        values={values}
        errors={errors}
      >
        <button onClick={verification} className={isVerified ? 'done' : ''}>
          {isVerified ? '인증 완료' : '인증 확인'}
        </button>
      </Input>
    </>
  );
};
