import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';
import { Input } from 'components/Join';
import { join } from 'api/queries/join';
import { Timer } from './Timer';
import { validate } from 'utils/valid_join';

export const InputVerified = ({
  values,
  onChange,
  errors,
  isVerified,
  setIsVerified
}) => {
  const [isSent, setIsSent] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [_, setRender] = useState(null);

  // 인증번호 발송
  const { mutate: checkingCode } = useMutation(join.sendCode, {
    onSuccess: () => {
      errors.phone_number = '';
      toast.success('메세지가 발송되었습니다 ✉');
      setIsSent(true);
      setWaiting(true);
    },
    onError: error => {
      if (error.response.data.message === 'Already Auth Code Exist') {
        errors.phone_number = '인증번호는 3분마다 재발송 가능합니다.';
      } else if (error.response.data.message === 'Already Phone Number Exist') {
        errors.phone_number = '이미 가입된 전화번호입니다.';
      }
    }
  });

  const codeSending = async e => {
    e.preventDefault();
    const errorMessage = await validate(values);

    errors.phone_number = errorMessage.phone_number || '';

    if (!errors.phone_number) {
      checkingCode({ phone_number: values.phone_number });
    }

    setRender(values);
  };

  // 인증번호 확인
  const { mutate: verifying } = useMutation(join.verifyCode, {
    onSuccess: () => {
      errors.verified_code = '';
      // toast.success('휴대폰 인증 성공 🎉');
      setWaiting(false);
      setIsVerified(true);
    },
    onError: error => {
      values.verified_code
        ? (errors.verified_code = '인증번호가 일치하지 않습니다.')
        : (errors.verified_code = '인증번호를 입력하세요.');
    }
  });

  const verification = e => {
    e.preventDefault();
    verifying(values);
  };

  useEffect(() => {
    setIsSent(false);
    setWaiting(false);
  }, [setIsSent, setWaiting, values.phone_number]);

  return (
    <>
      <Input
        name="phone_number"
        placeholder="핸드폰 번호"
        onChange={onChange}
        values={values}
        errors={errors}
      >
        {!waiting ? (
          <button onClick={codeSending}>
            {isSent ? '인증번호 재발송' : '인증번호 발송'}
          </button>
        ) : (
          <Timer setWaiting={setWaiting} />
        )}
        {waiting && (
          <p className="codeDesc">인증번호는 3분마다 재발송 가능합니다.</p>
        )}
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
