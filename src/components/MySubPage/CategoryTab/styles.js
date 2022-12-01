import styled from 'styled-components';

export const TabList = styled.ul`
  display: flex;
  margin-bottom: 10px;

  li {
    flex-basis: auto;
    border-bottom: ${({ theme }) => theme.style.border_light};
    color: ${({ theme }) => theme.color.gray_3};
    text-align: center;
    padding: 10px;
    font-weight: 500;
    cursor: pointer;
    white-space: nowrap;
    &.active {
      color: ${({ theme }) => theme.color.black_1};
      border-bottom: 2px solid ${({ theme }) => theme.color.main};
      margin-bottom: -1px;
    }
  }
`;
