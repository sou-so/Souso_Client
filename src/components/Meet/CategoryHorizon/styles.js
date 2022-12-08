import styled from 'styled-components';

export const CategoryContainer = styled.ul`
  display: flex;
  position: relative;
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.color.main};
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
`;

export const CategoryItem = styled.li`
  text-align: center;

  & + & {
    margin-left: 25px;
  }
`;

export const Name = styled.p`
  margin-top: 5px;
  font-size: 13px;
  white-space: nowrap;
`;
