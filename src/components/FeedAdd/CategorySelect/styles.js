import styled from 'styled-components';

export const SelectingView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.35);
  z-index: 99;
  > div:first-child {
    padding-top: ${({ theme }) => theme.style.header_height};
  }
`;

export const CategoryList = styled.ul`
  height: 50%;
  padding: 35px 20px 0;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
`;
