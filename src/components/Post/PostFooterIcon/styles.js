import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  margin-left: 4px;
  font-size: 12px;
  opacity: 0.5;
`;

export const IconList = styled.ul`
  display: flex;
  li {
    display: flex;
    align-items: center;
    & + li {
      margin-left: ${({ hasDate }) => (hasDate ? '15px' : '9px')};
    }
    &.liked {
      path {
        fill: ${({ theme }) => theme.color.like};
        stroke: ${({ theme }) => theme.color.like};
      }
    }
    &.bookmarked {
      path {
        fill: ${({ theme }) => theme.color.bookmark};
        stroke: ${({ theme }) => theme.color.bookmark};
      }
    }
  }
  .icon {
    margin-right: 2.5px;
  }
`;

export const Date = styled.span`
  margin-left: auto;
`;
