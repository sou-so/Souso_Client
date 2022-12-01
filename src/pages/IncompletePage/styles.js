import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 auto;
  h2 {
    font-size: 17px;
    font-weight: bold;
    color: ${({ theme }) => theme.color.main};
    text-align: center;
    padding-bottom: 12px;
  }
`;

export const ImgWrap = styled.div`
  margin: 252px auto 15px;
  img {
    width: 92px;
    height: 100px;
  }
`;

export const DescWarp = styled.div`
  text-align: center;
`;
