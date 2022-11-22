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

export const LoginButton = styled.button`
  ${button}
  margin-top: 25px;
  &.disabled {
    outline: ${({ theme }) => theme.style.border_main};
    background: transparent;
    color: ${({ theme }) => theme.color.black_1};
    font-weight: 500;
  }
`;
