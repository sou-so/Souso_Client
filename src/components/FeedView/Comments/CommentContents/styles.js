import styled from 'styled-components';

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
  position: relative;
  .btnWrap {
    right: 5px;
    top: 22px;
  }
  span {
    letter-spacing: -0.5px;
  }
`;

export const DateWrap = styled.div`
  font-size: 11px;
  color: ${({ theme }) => theme.color.black_2};
  line-height: 28px;
  margin-bottom: auto;
`;

export const CommentText = styled.div`
  padding: 0 10px 15px;
  font-size: 15px;
`;

export const TextBox = styled.p`
  width: 100%;
  word-break: break-all;
`;

export const CommentFooter = styled.div`
  padding: 0px 12px 10px;
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
`;
