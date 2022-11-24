import styled from 'styled-components';
import { input } from 'styles/Shared';

export const FormContainer = styled.div`
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
