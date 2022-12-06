import styled from 'styled-components';
import { input } from 'styles/Shared';

export const InputContainer = styled.div`
  position: relative;
  & + & {
    margin-top: 10px;
  }
  button,
  div {
    font-size: 10px;
    padding: 3px;
    position: absolute;
    top: 7px;
    right: 10px;
    color: #48b0d0;
    &.done {
      color: ${({ theme }) => theme.color.red};
    }
  }
  .timer {
    font-size: 12px;
  }
  .codeDesc {
    padding: 3px 0 0 6px;
    font-size: 12px;
  }
  .icon {
    padding: 0;
    opacity: 0.8;
  }
`;

export const Input = styled.input`
  ${input}
`;

export const Error = styled.span`
  font-size: 12px;
  margin-left: 5px;
  color: ${({ theme }) => theme.color.red};
`;
