import styled from 'styled-components';
import { button, input } from 'styles/Shared';

export const FormContainer = styled.form``;

export const InputWrap = styled.div`
  & + & {
    margin-top: 15px;
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
  margin-top: 25px;
`;

export const LoginButton = styled.button`
  ${button}
  &.disabled {
    border: ${({ theme }) => theme.style.border_main};
    background: transparent;
    color: ${({ theme }) => theme.color.black_1};
    font-weight: 500;
  }
`;
