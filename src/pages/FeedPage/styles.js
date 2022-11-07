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
