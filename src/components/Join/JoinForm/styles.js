import styled from 'styled-components';
import { button } from 'styles/Shared';

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

export const Submit = styled.div`
  margin-top: auto;
`;

export const JoinButton = styled.button`
  ${button}
  margin-top: 15px;
`;
