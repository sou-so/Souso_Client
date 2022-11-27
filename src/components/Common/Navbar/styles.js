import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.ul`
  min-height: 70px;
  display: flex;
  justify-content: space-around;
  border-radius: 12px 12px 0 0;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.12);
`;

export const NavItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
`;

export const NavLink = styled(Link)`
  padding: 0 10px;
  span {
    margin-top: 2px;
    display: block;
    font-size: 12px;
    color: ${({ theme }) => theme.color.gray_4};
  }
  .icon * {
    stroke: ${({ theme }) => theme.color.gray_3};
  }
  &.active {
    .icon * {
      stroke: ${({ theme }) => theme.color.main};
    }
    .icon:last-child * {
      fill: ${({ theme }) => theme.color.main};
      visibility: visible;
    }
    span {
      color: ${({ theme }) => theme.color.main};
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  .icon:first-child {
    z-index: 1000;
  }
  .icon:last-child {
    position: absolute;
    margin-left: -3.5px;
    z-index: 999;
    filter: drop-shadow(0 0 8px rgba(255, 163, 26, 0.5));
    will-change: transform;
  }
  .icon:last-child * {
    visibility: hidden;
  }
`;
