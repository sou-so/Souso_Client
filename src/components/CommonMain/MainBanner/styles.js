import styled from 'styled-components';

export const BannerContainer = styled.div`
  position: relative;
  margin-top: 15px;
  margin-left: 5px;
  a {
    font-size: ${({ theme }) => theme.font.sm};
    color: ${({ theme }) => theme.color.main};
  }
`;

export const BannerText = styled.p`
  font-size: ${({ theme }) => theme.font.lg};
  line-height: 1.3;
  letter-spacing: -1px;
  margin-bottom: 5px;
`;

export const BannerImage = styled.img`
  position: absolute;
  width: auto;
  &.feed {
    height: 85px;
    bottom: 5px;
    right: 0;
  }
  &.meet {
    height: 150px;
    bottom: -30px;
    right: -15px;
  }
`;
