import styled from 'styled-components';
import { button } from 'styles/Shared';

export const FormWrap = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  height: ${({ theme }) => theme.style.inner_height};
  overflow-y: scroll;
`;

export const TextBox = styled.textarea`
  resize: none;
  width: 100%;
  height: 268px;
  padding: 14px 16px;
  border: 1px solid ${({ theme }) => theme.color.gray_2};
  border-radius: 6px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.color.black_3};
    font-size: 13px;
  }
`;

export const Category = styled.div`
  display: none;
`;

export const SubmitButton = styled.button`
  ${button}
  margin-bottom: 34px;
`;
