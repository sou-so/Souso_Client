import styled from 'styled-components';
import { button, input } from 'styles/Shared';

export const FormContainer = styled.form`
  .stepStyle {
    opacity: 0;
    position: relative;
    top: -20px;
    transition: all 1s;
  }
  .showStep {
    opacity: 1;
    top: 0;
  }
`;

export const InputWrap = styled.div`
  & + & {
    margin-top: 10px;
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
  color: #48b0d0;
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
  justify-content: space-between;
`;

export const TermsInput = styled.input`
  margin-right: 8px;
`;

export const TermsBtn = styled.span`
  color: #999;
  border-bottom: 1px solid #999;
  cursor: pointer;
  font-size: 0.85rem;
`;

export const FieldWrap = styled.fieldset`
  border: none;
  margin-bottom: 30px;
`;
