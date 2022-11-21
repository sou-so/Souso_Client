import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  section {
    display: flex;
    flex-direction: column;
    padding: 0 15px;
    flex: 1;
    overflow-y: scroll;
  }
`;

export const Description = styled.div`
  padding: 25px 0 45px;
  p {
    font-size: 20px;
    span {
      font-size: 22px;
      font-weight: bold;
      color: ${({ theme }) => theme.color.main};
    }
  }
  P:last-child {
    font-weight: bold;
  }
`;
