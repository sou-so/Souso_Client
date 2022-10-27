import styled from 'styled-components';
import { button, input } from 'styles/Shared';

export const FormContainer = styled.form`
  flex: 1;
`;

export const InputWrap = styled.div`
  & + & {
    margin-top: 20px;
  }
  position: relative;
`;

export const Input = styled.input`
  ${input}
`;
export const InputButton = styled.button`
  font-size: 10px;
  padding: 3px;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`;

export const ButtonWarp = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 15px;
`;

export const JoinButton = styled.button`
  ${button}
`;

export const TermsWarp = styled.div`
  display: flex;
  margin: 80px 5px 0;
`;

export const TermsInput = styled.input`
  margin-right: 8px;
`;
