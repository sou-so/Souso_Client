import styled from 'styled-components';

export const PageContainer = styled.div`
  position: relative;
  height: calc(100% - ${({ theme }) => theme.style.header_height});
  overflow: hidden;
  .kakao_map {
    width: 100%;
    height: 60%;
  }
`;
