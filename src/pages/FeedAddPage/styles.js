import styled from 'styled-components';

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - ${({ theme }) => theme.style.header_height});
`;
