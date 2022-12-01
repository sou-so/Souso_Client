import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  & > h2 {
    font-size: 17px;
    font-weight: bold;
    color: ${({ theme }) => theme.color.main};
    text-align: center;
    padding-bottom: 12px;
  }
`;

export const ImgWrap = styled.div`
  margin: 150px auto 15px;
  img {
    width: 100px;
  }
`;

export const DescWarp = styled.div`
  text-align: center;
`;
