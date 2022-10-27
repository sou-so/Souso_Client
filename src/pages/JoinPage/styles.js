import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${({ theme }) => theme.style.edge_padding};
  height: calc(100% - ${({ theme }) => theme.style.header_height});
`;

export const Description = styled.div`
  padding: 25px 0 45px;
  p {
    font-size: 20px;
  }
  P:last-child {
    font-weight: bold;
  }
`;
