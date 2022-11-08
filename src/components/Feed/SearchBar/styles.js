import styled from 'styled-components';
import { input } from 'styles/Shared';

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin: 30px 0 15px;

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
