import styled from 'styled-components';
import { button } from 'styles/Shared';

export const FormWrap = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

export const TextBox = styled.textarea`
  resize: none;
  width: 100%;
  height: 268px;
  padding: 14px 16px;
  border: 1px solid ${({ theme }) => theme.color.gray_2};
  border-radius: 6px;
`;

export const FieldWrap = styled.fieldset`
  display: flex;
  padding: 12px 0 41px;
  &.hasPhoto {
    padding-bottom: 21px;
  }
`;

export const PhotoInput = styled.input`
  display: none;
`;

export const AddPhotoBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 71px;
  height: 71px;
  border: 1px solid ${({ theme }) => theme.color.gray_2};
  border-radius: 4px;
  p {
    font-size: 13px;
    line-height: 19.5px;
  }
`;

export const ImgPreview = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 279px;
`;

export const ImgWrap = styled.div`
  padding-left: 8px;
  img {
    width: 71px;
    height: 71px;
    border-radius: 4px;
  }
`;

export const SubmitButton = styled.button`
  ${button}
  margin-bottom: 34px;
`;
