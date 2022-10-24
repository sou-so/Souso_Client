import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${({ theme }) => theme.style.edge_padding};
  height: 100%;
  p {
    margin: 150px 0 50px;
  }
`;
