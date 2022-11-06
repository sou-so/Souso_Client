import styled from 'styled-components';

export const NavContainer = styled.ul`
  min-height: 70px;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #e4e4e4;
`;

export const NavItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;

  .menu {
    padding: 0 10px;
    opacity: 0.3;

    &.active {
      opacity: 1;
    }
    .icon svg {
      margin: 0 auto;
      width: 20px;
      height: 20px;
    }
    span {
      margin-top: 3px;
      display: block;
      font-size: 12px;
      font-weight: 600;
    }
  }
`;
