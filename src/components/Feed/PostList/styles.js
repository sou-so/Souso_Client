import styled from 'styled-components';

export const PostListContainer = styled.div`
  margin-bottom: 30px;
  min-height: ${({ theme }) => theme.style.inner_height};
`;

export const Tabs = styled.div`
  display: flex;
  margin-bottom: 10px;
  button {
    width: 50%;
    border: 1px solid #f0f0f0;
    margin-bottom: 1px;
    border-radius: 12px 12px 0 0;
    text-align: center;
    padding: 10px 0;
    font-size: ${({ theme }) => theme.font.md};
    color: ${({ theme }) => theme.color.gray_4};
    &.active {
      color: ${({ theme }) => theme.color.black_1};
      font-weight: 600;
      border-bottom: 2px solid ${({ theme }) => theme.color.main};
      margin-bottom: 0;
    }
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
