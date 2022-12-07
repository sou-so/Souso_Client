import styled from 'styled-components';

export const PostListContainer = styled.div`
  margin-bottom: 30px;
  min-height: ${({ theme }) => theme.style.inner_height};
`;

export const Tabs = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const TabButton = styled.button`
  position: relative;
  bottom: 0;
  width: 50%;
  margin-top: auto;
  padding: 10px 0;
  border: 1px solid #f0f0f0;
  border-radius: 12px 12px 0 0;
  font-size: ${({ theme }) => theme.font.md};
  text-align: center;
  color: #c5c5c5;
  background: #f0f0f0;
  outline: none;

  &.active {
    width: 57%;
    padding: 12px 0;
    font-weight: 600;
    box-shadow: 0 -2px 3px rgb(0 0 0 / 5%);
    border-bottom: none;
    color: #3a3a3a;
    background: #fff;
  }

  &:first-child.active {
    margin-right: -20px;
    z-index: 100;
  }

  &:last-child.active {
    margin-left: -20px;
    z-index: 100;
  }
`;

export const PostLists = styled.ul`
  padding: 0 15px;
  & > li {
    padding: 15px 0;
    cursor: pointer;
  }

  li + li {
    border-top: ${({ theme }) => theme.style.border_light};
  }
`;

export const Loading = styled.div`
  margin: 35px 0;
  text-align: center;
  img {
    width: 30px;
  }
`;
