import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WelcomeBanner = styled.div`
  padding: 60px 0 62px 30px;
  cursor: default;
  div:first-child {
    font-size: 26px;
    span {
      font-weight: bold;
      color: ${({ theme }) => theme.color.main};
    }
  }
  div:nth-child(2) {
    padding-top: 10px;
    font-size: 16px;
  }
`;

export const ImgWrap = styled.div``;

export const LinkBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 65px 30px 0 0;
  span {
    font-size: 18px;
  }
  a {
    width: 34px;
    height: 34px;
    margin-left: 6px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.color.main};
    div {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
