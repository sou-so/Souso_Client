import styled from 'styled-components';

export const PageContainer = styled.div`
  position: relative;
  height: 100%;

  & > div:last-child {
    height: calc(100% - 105px);
  }
`;
