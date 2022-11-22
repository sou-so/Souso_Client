import styled from 'styled-components';

export const Scrollbar = styled.div`
  height: calc(100% - ${({ theme }) => theme.style.header_height});
  & > div > div {
    margin: 0 !important;
    &:first-child {
      padding: ${({ padding }) => (padding ? `0 15px` : '0')};
    }
    &:last-child {
      width: 4px !important; // scrollbar width
    }
  }
`;
