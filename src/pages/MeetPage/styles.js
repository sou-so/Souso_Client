import styled from 'styled-components';

export const PageContainer = styled.div`
  position: relative;
`;

export const SectionWrap = styled.section`
  padding: 0 ${({ theme }) => theme.style.edge_padding};
`;

export const CategoryWrap = styled.section`
  min-height: 250px;
  margin-top: 20px;
  padding: 25px 15px 60px;
  border-top: ${({ theme }) => theme.style.border_light};
  /* background: #ffa31a; */
  h3 {
    margin-bottom: 25px;
    text-align: center;
    font-size: ${({ theme }) => theme.font.md};
  }
`;
