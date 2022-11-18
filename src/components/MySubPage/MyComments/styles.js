import styled from 'styled-components';

export const ListContainer = styled.ul`
  padding: 5px 15px 50px;
`;

export const CommentBox = styled.li`
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  & + & {
    margin-top: 15px;
  }
`;

export const PostTitle = styled.p`
  display: flex;
  font-size: ${({ theme }) => theme.font.xs};
  color: ${({ theme }) => theme.color.black_2};
  margin-top: 3px;
  float: right;

  span {
    display: inline-block;
    width: 180px;
    margin-right: -5px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const CommentList = styled.ul`
  margin-top: 15px;
  .icon {
    margin-right: 5px;
  }
  li {
    display: flex;
    position: relative;
    p {
      margin-right: 40px;
    }
  }
  li + li {
    margin-top: 5px;
  }
`;
