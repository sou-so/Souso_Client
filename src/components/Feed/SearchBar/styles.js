import styled from 'styled-components';
import { input } from 'styles/Shared';

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  position: relative;

  input {
    ${input}
    height: 100%;
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
