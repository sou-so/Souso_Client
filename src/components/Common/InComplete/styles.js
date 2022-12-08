import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  h2 {
    font-size: 17px;
    font-weight: bold;
    color: ${({ theme }) => theme.color.main};
    text-align: center;
    padding-bottom: 12px;
  }
  img {
    width: 100px;
    margin-bottom: 10px;
  }
  p {
    font-size: 13px;
    line-height: 1.6;
    color: #555;
  }
`;
