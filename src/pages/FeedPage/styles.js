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
  margin: 40px ${({ theme }) => theme.style.edge_padding} 0;
  padding-top: 25px;
  border-top: ${({ theme }) => theme.style.border_light};
  h3 {
    margin-bottom: 25px;
    text-align: center;
    font-size: ${({ theme }) => theme.font.md};
  }
`;

export const TempLinks = styled.div`
  display: flex;
  bottom: 10px;
  left: 25%;
  position: absolute;
  a {
    margin-left: 10px;
    font-size: 12px;
    color: #555;
  }
`;
