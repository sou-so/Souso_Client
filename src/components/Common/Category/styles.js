import styled from 'styled-components';

export const CategoryContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px 40px;
  flex-wrap: wrap;
  padding: 0 15px;

  li {
    text-align: center;
    cursor: pointer;
    svg {
      margin: 0 auto;
    }
    span {
      font-size: ${({ theme }) => theme.font.sm};
      margin-top: 4px;
      display: block;
    }
  }
`;

export const MoreButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 23px 0;
  .icon {
    margin-left: 4px;
  }
`;
