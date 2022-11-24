import styled from 'styled-components';

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 50px 0;
`;

export const EditButton = styled.label`
  position: absolute;
  right: 110px;
  bottom: 5px;
  cursor: pointer;
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: ${({ theme }) => theme.color.main};
  }
  & + input {
    display: none;
  }
`;
