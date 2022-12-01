import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PageContainer = styled.div`
  position: relative;
`;

export const Banner = styled.div`
  p {
    font-size: ${({ theme }) => theme.font.lg};
  }
`;

export const SectionWrap = styled.section`
  padding: 0 ${({ theme }) => theme.style.edge_padding};
  overflow: hidden;
`;

export const CategoryWrap = styled.section`
  min-height: 200px;
  margin: 40px 15px 50px;
  padding-top: 25px;
  border-top: ${({ theme }) => theme.style.border_light};
  h3 {
    margin-bottom: 25px;
    text-align: center;
    font-size: ${({ theme }) => theme.font.md};
  }
`;

export const FeedAddBtn = styled(Link)`
  position: absolute;
  right: 15px;
  bottom: 15px;
  padding: 13px;
  background-color: ${({ theme }) => theme.color.main};
  border-radius: 50% 50% 0 50%;
`;

export const TempLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  bottom: 0;
  width: 100%;
  background: #f5f5f5;
  opacity: 0.7;
  z-index: 100;
  position: absolute;
  a {
    margin-left: 10px;
    font-size: 12px;
    color: #555;
  }
`;
