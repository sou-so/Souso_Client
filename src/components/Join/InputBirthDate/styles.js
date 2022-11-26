import styled from 'styled-components';
import { input } from 'styles/Shared';

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SelectBox = styled.select`
  ${input}
  cursor: pointer;
  &:first-child {
    width: 100px;
  }
  & + & {
    margin-left: 10px;
    width: 70px;
  }
  option:disabled {
    background-color: #dadada;
  }

  /* box arrow style*/
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>")
    no-repeat 98% 5px;

  /* dropdown scrollbar style */
  ::-webkit-scrollbar {
    width: 10px;
    display: block;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: #ebe9e9;
  }
`;

export const Age = styled.p`
  margin: 0 auto;
  font-size: 13px;
  color: ${({ theme }) => theme.color.black_3};

  span:last-child {
    margin-left: 2px;
  }
`;
