import styled from 'styled-components';

export const InputContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 8px 20px 0px;
  border-top: 1px solid rgba(217, 217, 217, 0.4);
  border-radius: 12px 12px 0 0;
  background-color: #fff;
`;

export const FormContainer = styled.form`
  display: flex;
  justify-content: space-between;
`;

export const Input = styled.input`
  margin: 4.5px 6px;
  padding: 4.5px 2px;
  flex: 1;
`;

export const SendBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
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
