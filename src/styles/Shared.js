import { css } from 'styled-components';

export const button = ({ theme }) => css`
  border-radius: 5px;
  background: ${theme.color.main};
  color: ${theme.color.white_1};
  padding: 10px 20px;
  width: 100%;
  &.disabled {
    background: ${theme.color.gray_2};
  }
`;

export const input = ({ theme }) => css`
  padding: 8px 15px;
  font-size: ${theme.font.sm};
  border: 1px solid ${theme.color.gray_2};
  border-radius: 6px;
  width: 100%;
  &::placeholder {
    color: ${theme.color.gray_3};
  }
  &.bg {
    border: none;
    background-color: ${theme.color.gray_1};
  }
`;
