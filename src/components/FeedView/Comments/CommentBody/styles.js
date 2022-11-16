import styled from 'styled-components';

export const CommentContainer = styled.div``;

export const CommentCount = styled.div`
  font-size: 15px;
  padding: 0 0 12px 10px;
`;

export const CommentWrap = styled.div``;

export const OriginComment = styled.div`
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
    padding: 0 10px 0 12px;
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

export const Recomment = styled.div``;
