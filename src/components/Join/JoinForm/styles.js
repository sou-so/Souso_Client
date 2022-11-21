import styled from 'styled-components';
import { button, input } from 'styles/Shared';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 30px;
  .stepStyle {
    opacity: 0;
    z-index: -1;
    position: relative;
    top: -20px;
    transition: all 1s;
  }
  .showStep {
    opacity: 1;
    z-index: 1;
    top: 0;
  }
`;

export const FieldWrap = styled.fieldset`
  border: none;
  margin-bottom: 30px;
`;

export const InputWrap = styled.div`
  position: relative;
  & + & {
    margin-top: 10px;
  }
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
  color: #48b0d0;
  &.done {
    color: red;
  }
`;

export const Submit = styled.div`
  margin-top: auto;
`;

export const JoinButton = styled.button`
  ${button}
  margin-top: 15px;
`;
