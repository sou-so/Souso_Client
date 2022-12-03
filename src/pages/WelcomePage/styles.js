import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WelcomeBanner = styled.div`
  padding: 55px 30px;
  cursor: default;
  div:first-child {
    font-size: 24px;
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

export const ImgWrap = styled.div`
  img {
    width: 93%;
    margin: 0 auto;
    display: block;
  }
`;

export const LinkBtn = styled.div`
  display: flex;
  margin: 55px 30px 0 auto;
  cursor: pointer;
  span {
    font-size: 16px;
  }
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    margin-left: 6px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.color.main};
  }
`;
