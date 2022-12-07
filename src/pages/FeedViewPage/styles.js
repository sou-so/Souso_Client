import styled from 'styled-components';

export const PageContainer = styled.div`
  height: calc(100% - ${({ theme }) => theme.style.header_height});
`;

export const ContentSection = styled.section`
  padding: 20px 15px 10px;
  border-bottom: ${({ theme }) => theme.style.border_light};
  border-radius: 0px 0px 12px 12px;
`;

export const CommentSection = styled.section`
  padding: 15px 15px 20px;
`;

export const FormContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 8px 20px 0px;
  border-top: 1px solid rgba(217, 217, 217, 0.4);
  border-radius: 12px 12px 0 0;
  background-color: #fff;
`;

export const ReplyDesc = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 10px 0 8px;
  font-size: 13px;
  font-weight: bold;
  opacity: 0;
  transition: 1s all;
  &.reply {
    padding: 2px 0 10px;
    opacity: 1;
  }
  p > span {
    font-size: 15px;
    color: #48b0d0;
  }
`;
