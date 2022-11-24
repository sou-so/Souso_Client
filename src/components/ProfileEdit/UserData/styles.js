import styled from 'styled-components';
import { input } from 'styles/Shared';

export const FormContainer = styled.div`
  & > * + * {
    margin-top: 15px;
    display: block;
  }
`;

export const Name = styled.input`
  ${input}
`;

export const Town = styled.div`
  ${input}
  color: #ccc;
`;
