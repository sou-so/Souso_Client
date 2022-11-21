import React, { useState } from 'react';
import { TermsModal } from 'components/Join';
import { useForm } from 'hooks/useForm';
import * as S from './styles';

export const JoinForm = () => {
  const { values, handleChange } = useForm({
    name: '',
    nickname: '',
    phone_number: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, nickname, phone_number, email, password, password2 } = values;

  const [termsChecked, setTermsChecked] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleCheck = e => {
    // 아직 미구현 상태입니다.
    e.preventDefault();
  };

  const termsCheckEvent = () => {
    if (termsChecked === false) {
      setTermsChecked(true);
    } else {
      setTermsChecked(false);
    }
  };
  const termsViewEvent = () => {
    if (termsModalOpen === false) {
      setTermsModalOpen(true);
    } else {
      setTermsModalOpen(false);
    }
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
        </S.InputWrap>
        <S.InputWrap>
          <S.Input
            type="text"
            name="nickname"
            value={nickname}
            placeholder="닉네임"
            onChange={handleChange}
          />
          <S.InputButton onClick={handleCheck}>중복 확인</S.InputButton>
        </S.InputWrap>
        <S.InputWrap>
          <S.Input
            type="text"
            name="phone_number"
            value={phone_number}
            placeholder="핸드폰 번호"
            onChange={handleChange}
          />
        </S.InputWrap>
      </S.FieldWrap>

      <S.FieldWrap
        className={`stepStyle ${
          name && nickname && phone_number && 'showStep'
        }`}
      >
        <S.InputWrap>
          <S.Input
            type="email"
            name="email"
            value={email}
            placeholder="numble@example.com"
            onChange={handleChange}
          />
          <S.InputButton onClick={handleCheck}>인증번호 발송</S.InputButton>
        </S.InputWrap>
        <S.InputWrap>
          <S.Input placeholder="인증번호" />
          <S.InputButton>인증확인</S.InputButton>
        </S.InputWrap>
      </S.FieldWrap>

      <S.FieldWrap className={`stepStyle ${email && 'showStep'}`}>
        <S.InputWrap>
          <S.Input
            type="password"
            name="password"
            value={password}
            placeholder="비밀번호"
            onChange={handleChange}
          />
        </S.InputWrap>
        <S.InputWrap>
          <S.Input
            type="password"
            name="password2"
            value={password2}
            placeholder="비밀번호 확인"
            onChange={handleChange}
          />
        </S.InputWrap>
      </S.FieldWrap>

      <S.TermsWarp>
        <div>
          <S.TermsInput
            type="checkbox"
            checked={termsChecked}
            onChange={termsCheckEvent}
          />
          <span>앱이름 가입약관에 모두 동의합니다.</span>
        </div>
        <S.TermsBtn onClick={termsViewEvent}>확인하기</S.TermsBtn>
      </S.TermsWarp>

      {termsModalOpen && <TermsModal closeModal={termsViewEvent} />}

      <S.ButtonWarp>
        <S.JoinButton>가입하기</S.JoinButton>
      </S.ButtonWarp>
    </S.FormContainer>
  );
};
