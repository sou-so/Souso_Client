import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ comments }) => (comments ? '14px' : '8px')} 5px 0;
  border-top: ${({ comments }) => (comments ? 'none' : '1px solid #eee')};
`;

export const BtnContainer = styled.div`
  display: flex;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.color.black_2};
    span {
      font-size: 13px;
      line-height: 19.5px;
      padding-left: 4px;
    }
    path {
      stroke: ${({ theme }) => theme.color.black_2};
    }
  }
  & + & {
    margin-left: 11px;
  }
`;

export const Bookmark = styled.button`
  &.bookmarked {
    path {
      fill: ${({ theme }) => theme.color.bookmark};
      stroke: ${({ theme }) => theme.color.bookmark};
    }
  }
`;

export const Comment = styled.button`
  path {
    stroke: ${({ theme }) => theme.color.black_2};
  }
`;

export const DetailWrap = styled.div`
  display: flex;
  font-size: 11px;
  line-height: 28px;
  span {
    padding: 0 4px;
    color: ${({ theme }) => theme.color.black_2};
  }
`;
