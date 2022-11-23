import styled from 'styled-components';

export const SelectBanner = styled.div`
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 15px 40px;
  flex-wrap: wrap;
  height: 50%;
  padding: 33.5px;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  li {
    display: block;
    height: 68px;
    flex: 1;
    cursor: pointer;
    svg {
      margin: 0 auto;
    }
    p {
      margin-top: 4px;
      text-align: center;
    }
  }
`;
