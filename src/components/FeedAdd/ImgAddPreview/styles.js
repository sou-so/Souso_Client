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
  .container {
    width: 270px;
  }
`;

export const AddPhotoBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border: 1px solid ${({ theme }) => theme.color.gray_2};
  border-radius: 4px;
  margin-right: 10px;
  p {
    font-size: 13px;
    line-height: 19.5px;
  }
`;

export const ImgPreview = styled.div`
  display: flex;
  div + div {
    margin-left: 6px;
  }
`;

export const ImgWrap = styled.div`
  border: ${({ theme }) => theme.style.border_light};
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  img {
    display: block;
    width: 70px;
    height: 70px;
    border-radius: 4px;
    object-fit: cover;
  }
  .icon {
    display: none;
  }
  &:hover {
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      position: absolute;
    }
    &::before {
      content: '';
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 5px;
      position: absolute;
    }
  }
`;
