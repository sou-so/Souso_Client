import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 ${({ theme }) => theme.style.edge_padding};
`;

export const AppLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  p {
    letter-spacing: -1px;
    font-weight: 400;
  }
  h1 {
    font-size: ${({ theme }) => theme.font.lg};
    font-weight: 900;
  }
  img {
    width: 90px;
  }
`;

export const LinkTo = styled.ul`
  width: 100%;
  margin: 10px 0 65px;

  li {
    text-align: center;
    font-size: ${({ theme }) => theme.font.xs};
    &:last-child {
      margin-top: 30px;
    }
  }

  a {
    position: relative;
    margin-left: 5px;
    &:after {
      content: '';
      width: 100%;
      height: 0.5px;
      bottom: 1px;
      left: 0;
      background: #343434;
      position: absolute;
    }
  }
`;
