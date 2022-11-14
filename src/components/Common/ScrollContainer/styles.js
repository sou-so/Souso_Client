import styled from 'styled-components';

export const Scrollbar = styled.div`
  padding: ${({ padding }) => (padding ? `0 ${padding}px` : '0')};
  height: calc(100% - ${({ theme }) => theme.style.header_height});
  & > div > div {
    margin: 0 !important;
    &:last-child {
      width: 4px !important; // scrollbar width
    }
  }
`;
