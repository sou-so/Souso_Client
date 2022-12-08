import styled from 'styled-components';

export const HashTagsList = styled.ul`
  display: flex;
  li {
    padding: 6px 10px;
    font-size: ${({ theme }) => theme.font.sm};
    border: ${({ theme }) => theme.style.border_light};
    border-radius: 15px;
    color: #555;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
  }
  li + li {
    margin-left: 5px;
  }
`;
