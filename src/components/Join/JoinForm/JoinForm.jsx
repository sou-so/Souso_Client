import React, { useState } from 'react';
import { TermsButton } from 'components/Join';
import { useForm } from 'hooks/useForm';
import { validate } from 'utils/valid_join';
import * as S from './styles';

export const JoinForm = ({ mutate }) => {
  const [isUnique, setIsUnique] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  const [errors, setErrors] = useState({});

  const { values, handleChange } = useForm({
    name: '',
    nickname: '',
    birth: '19991114',
    phone_number: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, nickname, phone_number, email, password, password2 } = values;

  const handleSubmit = async e => {
    e.preventDefault();
    const error = await validate(values);
    const hasInvaild = Object.keys(error).length;
    if (!hasInvaild) {
      // 모든 조건 통과 시
      mutate(values);
    } else {
      setErrors(error);
    }
  };

  const checkDuplicate = e => {
    e.preventDefault();
    setIsUnique(true); // 중복 확인 완료 시
  };

  const sendVerification = e => {
    e.preventDefault();
    setIsVerified(true); // 휴대폰 인증 완료 시
  };

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <S.FieldWrap>
        <S.InputWrap>
          <S.Input
            type="text"
            name="name"
            value={name}
            placeholder="이름"
            onChange={handleChange}
          />
          {errors.name && <S.Error>{errors.name}</S.Error>}
        </S.InputWrap>
        <S.InputWrap>
          <S.Input
            type="text"
            name="nickname"
            value={nickname}
            placeholder="닉네임"
            onChange={handleChange}
          />
          <S.InputButton
            onClick={checkDuplicate}
            className={isUnique ? 'done' : ''}
          >
            {isUnique ? '사용 가능' : '중복 확인'}
          </S.InputButton>
          {errors.nickname && <S.Error>{errors.nickname}</S.Error>}
        </S.InputWrap>
        <S.InputWrap>
          <S.Input
            type="text"
            name="phone_number"
            value={phone_number}
            placeholder="핸드폰 번호"
            onChange={handleChange}
          />
          <S.InputButton
            onClick={sendVerification}
            className={isVerified ? 'done' : ''}
          >
            {isVerified ? '인증 성공' : '인증번호 발송'}
          </S.InputButton>
          {errors.phone_number && <S.Error>{errors.phone_number}</S.Error>}
        </S.InputWrap>
      </S.FieldWrap>

      <S.FieldWrap
        className={`stepStyle ${name && isUnique && isVerified && 'showStep'}`}
      >
        <S.InputWrap>
          <S.Input
            type="email"
            name="email"
            value={email}
            placeholder="numble@example.com"
            onChange={handleChange}
          />
          {errors.email && <S.Error>{errors.email}</S.Error>}
        </S.InputWrap>
        <S.InputWrap>
          <S.Input
            type="password"
            name="password"
            value={password}
            placeholder="비밀번호"
            onChange={handleChange}
          />
          {errors.password && <S.Error>{errors.password}</S.Error>}
        </S.InputWrap>
        <S.InputWrap>
          <S.Input
            type="password"
            name="password2"
            value={password2}
            placeholder="비밀번호 확인"
            onChange={handleChange}
          />
          {errors.password2 && <S.Error>{errors.password2}</S.Error>}
        </S.InputWrap>
      </S.FieldWrap>

      <S.Submit>
        <TermsButton isAgreed={isAgreed} setIsAgreed={setIsAgreed} />
        <S.JoinButton
          type="submit"
          disabled={!isAgreed}
          className={!isAgreed ? 'disabled' : ''}
        >
          가입하기
        </S.JoinButton>
      </S.Submit>
    </S.FormContainer>
  );
};
