import styled from 'styled-components';

export const PageContainer = styled.div`
  height: calc(100% - ${({ theme }) => theme.style.header_height});
`;

export const ContentSection = styled.section`
  padding: 20px 15px 10px;
  border-bottom: ${({ theme }) => theme.style.border_light};
  border-radius: 0px 0px 12px 12px;
`;

export const CommentSection = styled.section`
  padding: 15px 15px 20px;
`;
