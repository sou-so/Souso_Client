import { css } from 'styled-components';

export const button = ({ theme }) => css`
  border-radius: 5px;
  background: ${theme.color.main};
  color: ${theme.color.white_1};
  padding: 10px 20px;
  width: 100%;
`;

export const input = ({ theme }) => css`
  padding: 8px 15px;
  font-size: ${theme.font.sm};
  background: ${theme.color.gray_1};
  width: 100%;
  &::placeholder {
    color: #aaa;
  }
`;
