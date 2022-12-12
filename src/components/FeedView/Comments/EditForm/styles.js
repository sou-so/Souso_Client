import styled from 'styled-components';

export const EditingForm = styled.form`
  display: flex;
  button {
    padding: 4px 6px;
    margin-left: 4px;
    font-size: 13px;
    line-height: 19.5px;
    border: 1px solid #eaeaea;
    border-radius: 4px;
  }
`;

export const EditInput = styled.textarea`
  resize: none;
  flex: 1;
  width: 70%;
  height: 40px;
  padding: 4px 6px;
  border: 1px solid #eaeaea;
  border-radius: 4px;
`;
