import styled from 'styled-components';

export const PhotoInput = styled.input`
  display: none;
`;

export const FieldWrap = styled.fieldset`
  display: flex;
  padding: 12px 0 41px;
  &.hasPhoto {
    padding-bottom: 21px;
  }
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
  overflow-x: scroll;
`;

export const ImgWrap = styled.div`
  padding-left: 8px;
  img {
    width: 71px;
    height: 71px;
    border-radius: 4px;
  }
`;
