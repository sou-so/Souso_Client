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
    width: 100%;
    height: 310px;
  }

  &.multi img {
    width: 49%;
    height: 170px;
    &:first-child {
      margin-right: 4px;
    }
  }
`;
