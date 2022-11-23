import styled from 'styled-components';

export const CategoryBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CategoryImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 97px;
  height: 97px;
  margin-top: 50px;
  border-radius: 50%;
  overflow: hidden;
  &.onSelecting {
    border: 1px solid rgba(255, 255, 255, 0.4);
    background-color: inherit;
  }
  &.onSelected {
    background-color: ${({ theme }) => theme.color.main};
  }
`;

export const CategoryNameBtn = styled.button`
  display: flex;
  justify-content: center;
  width: 169px;
  height: 45px;
  padding: 8px 0 9px;
  margin: 13px 0 28px;
  border: 1px solid ${({ theme }) => theme.color.main};
  border-radius: 6px;
  background-color: #fff;
  font-size: 16px;
  line-height: 28px;
  cursor: pointer;
  &.onSelecting {
    border: none;
  }
`;
