import React, { useState } from 'react';
import * as S from './styles';

export const JoinForm = () => {
  const [termsChecked, setTermsChecked] = useState(false);

  const handleSubmit = e => {
    // 아직 미구현 상태입니다.
    e.preventDefault();
  };

  const handleCheck = e => {
    // 아직 미구현 상태입니다.
    e.preventDefault();
  };

  const termsBtnEvent = () => {
    if (termsChecked === false) {
      setTermsChecked(true);
    } else {
      setTermsChecked(false);
    }
  };

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <S.InputWrap>
        <S.Input placeholder="이름" />
      </S.InputWrap>
      <S.InputWrap>
        <S.Input placeholder="닉네임" />
        <S.InputButton onClick={handleCheck}>중복확인</S.InputButton>
      </S.InputWrap>
      <S.InputWrap>
        <S.Input placeholder="010-1234-5678" />
      </S.InputWrap>

      <S.InputWrap>
        <S.Input placeholder="numble@example.com" />
        <S.InputButton onClick={handleCheck}>인증번호 발송</S.InputButton>
      </S.InputWrap>
      <S.InputWrap>
        <S.Input placeholder="인증번호" />
        <S.InputButton onClick={handleCheck}>인증확인</S.InputButton>
      </S.InputWrap>

      <S.InputWrap>
        <S.Input placeholder="비밀번호" />
      </S.InputWrap>
      <S.InputWrap>
        <S.Input placeholder="비밀번호 확인" />
      </S.InputWrap>

      <S.TermsWarp>
        <S.TermsInput
          type="checkbox"
          checked={termsChecked}
          onChange={termsBtnEvent}
        />
        <span>서비스 이용약관에 모두 동의합니다.</span>
      </S.TermsWarp>

      <S.ButtonWarp>
        <S.JoinButton>가입하기</S.JoinButton>
      </S.ButtonWarp>
    </S.FormContainer>
  );
};
