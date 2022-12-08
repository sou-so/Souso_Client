import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${({ theme }) => theme.style.header_height};
  padding: 0 ${({ theme }) => theme.style.edge_padding};
`;

export const Location = styled.div`
  display: flex;
  cursor: pointer;
  span {
    font-weight: 600;
    margin: 0 5px 3px 2px;
  }
  .icon {
    display: flex;
    align-items: center;
  }
`;

export const Alert = styled.div`
  cursor: pointer;
  position: relative;
  &.active:after {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    top: 0;
    right: 0;
    background: ${({ theme }) => theme.color.main};
    position: absolute;
  }
`;
