import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  & > *:first-child {
    flex: 1;
  }
`;
