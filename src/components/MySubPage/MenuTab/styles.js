import styled from 'styled-components';

export const TabList = styled.ul`
  display: flex;
  margin: 0 15px 10px;
  border-bottom: ${({ theme }) => theme.style.border_light};

  li {
    flex-basis: ${({ isFull }) => (isFull ? '50%' : 'auto')};
    color: ${({ theme }) => theme.color.gray_3};
    text-align: center;
    padding: 10px;
    font-weight: 500;
    cursor: pointer;
    &.active {
      color: ${({ theme }) => theme.color.black_1};
      border-bottom: 2px solid ${({ theme }) => theme.color.main};
      margin-bottom: -1px;
    }
  }
`;
