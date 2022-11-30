import styled from 'styled-components';

export const CommentCount = styled.div`
  font-size: 15px;
  padding: 0 10px;
`;

export const CommentContainer = styled.div``;

export const OriginComment = styled.div`
  padding-top: 14px;
  border-bottom: 1px solid #d9d9d9;
  &:last-child {
    padding-bottom: 10px;
  }
`;

export const Recomment = styled.div`
  margin-left: 33px;
  padding: 14px 0 0 15px;
  border-top: 1px solid #d9d9d9;
`;

export const NoComment = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.color.gray_4};
  line-height: 22px;
  text-align: center;
  padding-top: 40px;
`;
