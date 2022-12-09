import styled from 'styled-components';

export const CommentCount = styled.div`
  font-size: 15px;
  padding: 0 10px;
`;

export const CommentContainer = styled.div``;

export const OriginComment = styled.div`
  padding-top: 14px;
  &:last-child {
    margin-bottom: 80px;
  }
  & + & {
    border-top: 1px solid #eee;
  }
`;

export const Recomment = styled.div`
  margin-left: 10px;
  padding: 14px 0 0 15px;
  border-top: 1px solid #eee;
`;

export const NoComment = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.color.gray_4};
  line-height: 22px;
  text-align: center;
  padding: 50px 0 130px;
`;
