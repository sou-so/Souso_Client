import React, { useState } from 'react';
import { useForm } from 'hooks/useForm';
import { validate } from 'utils/valid_join';

import { useRecoilValue } from 'recoil';
import { addressState } from 'atoms/address';

import * as C from 'components/Join';
import * as S from './styles';

export const JoinForm = ({ createAccount }) => {
  const [isUnique, setIsUnique] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  const [errors, setErrors] = useState({});

  const address = useRecoilValue(addressState);

  const { values, handleChange, setValues } = useForm(defaultValues);

  const handleSubmit = async e => {
    e.preventDefault();
    const error = await validate(values);
    const hasInvaild = Object.keys(error).length;

    if (!hasInvaild) {
      createAccount({ ...values, location: address.join(' ') });
    } else {
      setErrors(error);
    }
  };

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <S.FieldWrap>
        <C.Input
          name="name"
          placeholder="이름"
          onChange={handleChange}
          values={values}
          errors={errors}
        />
        <C.InputDuplicated
          isUnique={isUnique}
          setIsUnique={setIsUnique}
          onChange={handleChange}
          values={values}
          errors={errors}
        />
        <C.InputEmailCheck
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
        <C.InputVerified
          isVerified={isVerified}
          setIsVerified={setIsVerified}
          onChange={handleChange}
          values={values}
          errors={errors}
        />
      </S.FieldWrap>

      <S.FieldWrap className={`stepStyle ${isVerified && 'showStep'}`}>
        <C.InputBirthDate setValues={setValues} errors={errors} />
        <C.InputPassword
          name="password"
          onChange={handleChange}
          values={values}
          errors={errors}
        />
        <C.InputPassword
          name="password2"
          onChange={handleChange}
          values={values}
          errors={errors}
        />
      </S.FieldWrap>
      <S.Submit>
        <C.TermsButton isAgreed={isAgreed} setIsAgreed={setIsAgreed} />
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
  birth: '',
  location: '',
  phone_number: '',
  verified_code: '',
  email: '',
  password: '',
  password2: ''
};
