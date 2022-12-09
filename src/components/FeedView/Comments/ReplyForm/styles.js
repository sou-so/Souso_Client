import styled from 'styled-components';

export const CommentSendForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CommentInput = styled.input`
  margin: 4.5px 6px;
  padding: 4.5px 2px;
  flex: 1;
  width: 50%;
  outline: none;
`;

export const SendBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.main};
`;

export const DragBar = styled.div`
  width: 135px;
  height: 5px;
  background-color: ${({ theme }) => theme.color.gray_2};
  border-radius: 5px;
  margin: 13.5px auto;
  cursor: pointer;
`;
