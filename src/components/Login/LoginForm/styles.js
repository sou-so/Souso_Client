import styled from 'styled-components';
import { button, input } from 'styles/Shared';

export const FormContainer = styled.form`
  flex: 1;
`;

export const InputWrap = styled.div`
  & + & {
    margin-top: 30px;
  }
  h3 {
    margin-bottom: 6px;
  }
`;

export const Input = styled.input`
  ${input}
`;

export const ButtonWrap = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 70px;
`;

export const LoginButton = styled.button`
  ${button}
  margin-bottom: 15px;
`;
