import styled from 'styled-components';

export const CategoryContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px 30px;
  flex-wrap: wrap;
  padding: 0 15px;
  li {
    text-align: center;
    position: relative;
    cursor: pointer;
    * {
      margin: 0 auto;
    }
  }
  .icon {
    display: flex;
    background-color: ${({ theme }) => theme.color.main};
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
`;

export const Name = styled.p`
  width: 100%;
  padding-top: 42px;
  top: 0;
  position: absolute;
  font-size: ${({ theme }) => theme.font.sm};
  word-break: keep-all;
  margin-left: -1px;
`;

export const MoreButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 23px;
  .icon {
    margin-left: 4px;
  }
`;
