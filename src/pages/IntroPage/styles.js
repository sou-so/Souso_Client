import styled from 'styled-components';
import { button } from 'styles/Shared';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  padding: 0 ${({ theme }) => theme.style.edge_padding};
  height: 100%;
  position: relative;
`;

export const LogoWrap = styled.div`
  font-size: ${({ theme }) => theme.font.lg};
  font-weight: 900;
  position: absolute;
  top: 35%;
  p {
    font-size: ${({ theme }) => theme.font.md};
    font-weight: 500;
  }
`;

export const ButtonWrap = styled.div`
  width: 100%;
  margin-bottom: 65px;
`;

export const JoinButton = styled.button`
  ${button}
  margin-bottom: 15px;
`;

export const LoginButton = styled.p`
  font-size: ${({ theme }) => theme.font.sm};
  a {
    margin-left: 8px;
  }
`;
