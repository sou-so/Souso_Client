import styled from 'styled-components';

export const CategoryBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CategoryImg = styled.div`
  width: 97px;
  height: 97px;
  margin-top: 50px;
  background-color: ${({ theme }) => theme.color.gray_2};
  border-radius: 50%;
`;

export const CategoryName = styled.div`
  display: flex;
  justify-content: center;
  width: 169px;
  height: 45px;
  padding: 8px 0 9px;
  margin: 13px 0 28px;
  border: 2px solid ${({ theme }) => theme.color.main};
  border-radius: 6px;
  background-color: #fff;
  font-size: 16px;
  line-height: 28px;
  cursor: pointer;
`;
