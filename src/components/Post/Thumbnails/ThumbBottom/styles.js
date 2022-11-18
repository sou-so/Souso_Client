import styled from 'styled-components';

export const PostContainer = styled.li``;

export const Thumbnail = styled.div`
  display: flex;
  overflow: hidden;

  img {
    border-radius: 12px;
    border: ${({ theme }) => theme.style.border_light};
    object-fit: cover;
  }

  &.single img {
    width: 360px;
    height: 360px;
  }

  &.multi img {
    width: 50%;
    height: 170px;
    &:first-child {
      margin-right: 5px;
    }
  }
`;
