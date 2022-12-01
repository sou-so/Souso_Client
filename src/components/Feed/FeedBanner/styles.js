import styled from 'styled-components';

export const BannerContainer = styled.div`
  position: relative;
  margin-top: 15px;
  margin-left: 5px;
  p {
    font-size: ${({ theme }) => theme.font.lg};
    line-height: 1.3;
    letter-spacing: -1px;
    margin-bottom: 5px;
  }
  a {
    font-size: ${({ theme }) => theme.font.sm};
    color: ${({ theme }) => theme.color.main};
  }
  img {
    width: auto;
    height: 85px;
    bottom: 5px;
    right: 0;
    position: absolute;
  }
`;
