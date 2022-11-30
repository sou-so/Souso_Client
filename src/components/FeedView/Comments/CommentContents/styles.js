import styled from 'styled-components';

export const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 9px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  p.userName {
    font-size: 13px;
    font-weight: 500;
    line-height: 28px;
    padding-left: 5px;
  }
`;

export const ButtonWrap = styled.div``;

export const CommentText = styled.div`
  padding: 0 10px;
  font-size: 15px;
`;

export const CommentFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2px 10px 18px 12px;
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
