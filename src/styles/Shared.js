import { css } from 'styled-components';

export const button = ({ theme }) => css`
  border-radius: 5px;
  background: ${theme.color.main};
  color: ${theme.color.white_1};
  padding: 10px 20px;
  width: 100%;
`;
