import React, { useState } from 'react';
import * as S from './styles';
import { TermsModal } from '../TermsModal/TermsModal';

export const JoinForm = () => {
  const [account, setAccount] = useState({
    userName: '',
    nickname: '',
    phone: '',
    email: '',
    password: ''
  });
  const [termsChecked, setTermsChecked] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);

  const handleSubmit = e => {
    // 아직 미구현 상태입니다.
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

  const onChangeAccount = e => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value
    });
  };
  console.log('account', account); // 확인용

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <S.FieldWrap>
        <S.InputWrap>
          <S.Input
            name="userName"
            placeholder="이름"
            onChange={onChangeAccount}
          />
        </S.InputWrap>
        <S.InputWrap>
          <S.Input
            name="nickname"
            placeholder="닉네임"
            onChange={onChangeAccount}
          />
          <S.InputButton onClick={handleCheck}>중복 확인</S.InputButton>
        </S.InputWrap>
        <S.InputWrap>
          <S.Input
            name="phone"
            placeholder="핸드폰 번호"
            onChange={onChangeAccount}
          />
        </S.InputWrap>
      </S.FieldWrap>

      <S.FieldWrap
        className={`stepStyle ${
          account.userName && account.nickname && account.phone && 'showStep'
        }`}
      >
        <S.InputWrap>
          <S.Input
            name="email"
            placeholder="numble@example.com"
            onChange={onChangeAccount}
          />
          <S.InputButton onClick={handleCheck}>인증번호 발송</S.InputButton>
        </S.InputWrap>
        <S.InputWrap>
          <S.Input placeholder="인증번호" />
          <S.InputButton>인증확인</S.InputButton>
        </S.InputWrap>
      </S.FieldWrap>

      <S.FieldWrap className={`stepStyle ${account.email && 'showStep'}`}>
        <S.InputWrap>
          <S.Input
            type="password"
            name="password"
            placeholder="비밀번호"
            onChange={onChangeAccount}
          />
        </S.InputWrap>
        <S.InputWrap>
          <S.Input type="password" placeholder="비밀번호 확인" />
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
