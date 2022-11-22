import React, { useState } from 'react';
import { Input } from 'components/Join';

export const InputVerified = ({
  values,
  onChange,
  errors,
  isVerified,
  setIsVerified
}) => {
  const [isSent, setIsSent] = useState(false);

  const sendCode = e => {
    e.preventDefault();
    setIsSent(true); // 인증 코드 전송 완료 시
  };

  const verified = e => {
    e.preventDefault();
    alert('휴대폰 인증 성공 🎉');
    setIsVerified(true); // 휴대폰 인증 완료 시
  };

  return (
    <>
      <Input
        name="phone_number"
        placeholder="핸드폰 번호"
        onChange={onChange}
        values={values}
        errors={errors}
      >
        <button onClick={sendCode}>
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
        <button onClick={verified} className={isVerified ? 'done' : ''}>
          {isVerified ? '인증 완료' : '인증 확인'}
        </button>
      </Input>
    </>
  );
};
