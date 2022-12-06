import styled from 'styled-components';

export const ListContainer = styled.div`
  position: relative;
  > button {
    position: absolute;
    right: 4px;
    top: 4px;
    font-size: 13px;
    opacity: 0.8;
    color: ${({ theme }) => theme.color.main};
  }
`;

export const ListTitle = styled.h3`
  display: flex;
  align-items: center;
  padding-bottom: 12px;
  font-size: ${({ theme }) => theme.font.md};
  font-weight: bold;
  border-bottom: ${({ theme }) => theme.style.border_light};

  span {
    margin-left: 5px;
    font-size: ${({ theme }) => theme.font.sm};
    font-weight: 300;
  }
`;

export const NeighborList = styled.ul`
  margin-top: 12px;
  li {
    cursor: pointer;
    & + li {
      margin-top: 12px;
    }
  }
`;
