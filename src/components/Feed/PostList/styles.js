import styled from 'styled-components';

export const PostListContainer = styled.div`
  margin-bottom: 100px;
`;

export const Tabs = styled.div`
  display: flex;
  button {
    width: 50%;
    border: 1px solid #f0f0f0;
    margin-bottom: 1px;
    border-radius: 12px 12px 0 0;
    text-align: center;
    padding: 10px 0;
    font-size: ${({ theme }) => theme.font.md};
    font-weight: 600;
    &.active {
      border-bottom: 2px solid #000;
      margin-bottom: 0;
    }
  }
`;

export const PostLists = styled.ul`
  li {
    border-bottom: ${({ theme }) => theme.style.border_light};
    padding: 15px;
    cursor: pointer;
  }
`;
