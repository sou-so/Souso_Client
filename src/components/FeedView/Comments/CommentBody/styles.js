import styled from 'styled-components';

export const CommentContainer = styled.div``;

export const CommentCount = styled.div`
  font-size: 15px;
  padding: 0 10px;
`;

export const CommentWrap = styled.div``;

export const OriginComment = styled.div`
  padding-top: 14px;
  border-bottom: 1px solid #d9d9d9;
  &:last-child {
    padding-bottom: 10px;
  }
  .comment_user {
    display: flex;
    align-items: center;
    padding-bottom: 9px;
    .nickname {
      font-size: 13px;
      font-weight: 500;
      line-height: 28px;
      padding-left: 5px;
    }
  }
  .comment_text {
    padding: 0 10px;
    font-size: 15px;
  }
  .comment_footer {
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
    p {
      font-size: 11px;
      color: ${({ theme }) => theme.color.black_2};
      line-height: 28px;
    }
  }
`;

export const RecommentWrap = styled.div`
  margin-left: 33px;
  padding-top: 14px;
  border-top: 1px solid #d9d9d9;
`;

export const Recomment = styled.div`
  margin-left: 15px;
`;
