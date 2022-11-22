import styled from 'styled-components';
import { button, input } from 'styles/Shared';

export const SearchBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 27px 0 20px;
`;

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  position: relative;

  input {
    ${input}
    height: 100%;
    border-color: ${({ theme }) => theme.color.main};
    padding-right: 40px;
    &:focus {
      outline: none;
    }
  }

  .icon {
    right: 0;
    position: absolute;
    margin-right: 5px;
    cursor: pointer;
  }
`;

export const SearchButton = styled.button`
  ${button}
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-left: 5px;
`;
