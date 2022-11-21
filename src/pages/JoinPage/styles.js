import styled from 'styled-components';

export const BodyContainer = styled.div`
  padding: 0 ${({ theme }) => theme.style.edge_padding};
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
