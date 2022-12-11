import styled from 'styled-components';

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 9px;
  position: relative;
  .icon {
    margin-right: 5px;
  }
  .name {
    font-size: 14px;
    padding: 0 5px 0 8px;
  }
  span {
    letter-spacing: -0.5px;
  }
`;

export const CommentText = styled.div`
  padding: 0 10px 6px;
  font-size: 15px;
`;

export const TextBox = styled.p`
  width: 100%;
  word-break: break-all;
`;

export const CommentFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2px 10px 15px 12px;
  &.onlyDate {
    justify-content: flex-end;
    padding-bottom: 10px;
  }
  button {
    display: flex;
    align-items: center;
    path {
      stroke: ${({ theme }) => theme.color.black_2};
    }
    span {
      font-size: 13px;
      line-height: 19.5px;
      padding-left: 4.5px;
      color: ${({ theme }) => theme.color.black_2};
    }
  }
  div {
    font-size: 11px;
    color: ${({ theme }) => theme.color.black_2};
    line-height: 28px;
  }
`;
