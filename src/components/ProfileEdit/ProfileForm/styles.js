import styled from 'styled-components';
import { button, input } from 'styles/Shared';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  height: ${({ theme }) => theme.style.inner_height};
`;

export const UserData = styled.div`
  & > * + * {
    margin-top: 15px;
  }
  a {
    display: block;
  }
`;

export const Town = styled.div`
  ${input}
  display: flex;
  justify-content: space-between;
  align-items: center;
  .icon svg {
    width: 20px;
    height: 20px;
  }
`;

export const SubmitButton = styled.button`
  ${button}
  margin: auto 0 20px;
`;
