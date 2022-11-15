import styled from 'styled-components';

export const ButtonContainer = styled.button`
  position: absolute;
  top: 5px;
  right: 13px;
  path {
    fill: ${({ theme }) => theme.color.black_1};
  }
`;
