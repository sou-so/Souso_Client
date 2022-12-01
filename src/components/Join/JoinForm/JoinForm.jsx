import React, { useState } from 'react';
import {
  Input,
  InputDuplicated,
  InputEmailCheck,
  InputVerified,
  TermsButton
} from 'components/Join';
import { useForm } from 'hooks/useForm';
import { validate } from 'utils/valid_join';
import * as S from './styles';

export const JoinForm = ({ createAccount }) => {
  const [isUnique, setIsUnique] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  const [errors, setErrors] = useState({});

  const { values, handleChange } = useForm(defaultValues);

  const handleSubmit = async e => {
    e.preventDefault();
    const error = await validate(values);
    const hasInvaild = Object.keys(error).length;

    // TODO -- 이미 존재하는 이메일일 때 error 처리
    if (!hasInvaild) {
      createAccount(values);
    } else {
      setErrors(error);
    }
  };

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <S.FieldWrap>
        <Input
          name="name"
          placeholder="이름"
          onChange={handleChange}
          values={values}
          errors={errors}
        />
        <InputDuplicated
          isUnique={isUnique}
          setIsUnique={setIsUnique}
          onChange={handleChange}
          values={values}
          errors={errors}
        />
        <InputEmailCheck
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          onChange={handleChange}
          values={values}
          errors={errors}
        />
      </S.FieldWrap>

      <S.FieldWrap
        className={`stepStyle ${
          values.name && values.email && isUnique && isChecked && 'showStep'
        }`}
      >
        <InputVerified
          isVerified={isVerified}
          setIsVerified={setIsVerified}
          onChange={handleChange}
          values={values}
          errors={errors}
        />
      </S.FieldWrap>

      <S.FieldWrap className={`stepStyle ${isVerified && 'showStep'}`}>
        <Input
          name="password"
          placeholder="비밀번호"
          onChange={handleChange}
          values={values}
          errors={errors}
        />
        <Input
          name="password2"
          placeholder="비밀번호 확인"
          onChange={handleChange}
          values={values}
          errors={errors}
        />
      </S.FieldWrap>
      <S.Submit>
        <TermsButton isAgreed={isAgreed} setIsAgreed={setIsAgreed} />
        <S.JoinButton
          type="submit"
          disabled={!isAgreed || !values.password2}
          className={!isAgreed || !values.password2 ? 'disabled' : ''}
        >
          가입하기
        </S.JoinButton>
      </S.Submit>
    </S.FormContainer>
  );
};

const defaultValues = {
  name: '',
  nickname: '',
  birth: '19991114',
  phone_number: '',
  verified_code: '',
  email: '',
  password: '',
  password2: ''
};
