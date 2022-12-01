import styled from 'styled-components';

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 82% !important;

  p {
    margin-top: 10px;
    color: ${({ theme }) => theme.color.gray_4};
  }
`;
