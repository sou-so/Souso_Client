import styled from 'styled-components';

export const CategoryBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &.onSelecting {
    > div {
      border: 1px solid rgba(255, 255, 255, 0.4);
      background-color: inherit;
    }
    > button {
      cursor: default;
    }
  }
  &.onSelected {
    > div {
      background-color: ${({ theme }) => theme.color.main};
      cursor: pointer;
    }
    > button {
      border: 1px solid ${({ theme }) => theme.color.main};
      cursor: pointer;
    }
  }
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
`;

export const CategoryNameBtn = styled.button`
  display: flex;
  justify-content: center;
  width: 169px;
  height: 45px;
  padding: 8px 0 9px;
  margin: 13px 0 28px;
  border-radius: 6px;
  background-color: #fff;
  font-size: 16px;
  line-height: 28px;
`;
