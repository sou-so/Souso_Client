import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 15px;
  .btnWrap {
    right: 6px;
    top: 22px;
  }
  span {
    letter-spacing: -0.5px;
  }
`;

export const UserInfo = styled.div`
  margin-left: 11px;
  .name {
    font-size: 15.5px;
    padding-right: 6px;
  }
  .age,
  .town {
    font-size: 12px;
    color: ${({ theme }) => theme.color.black_2};
  }
  .town {
    position: relative;
    padding-left: 5px;
    margin: 0 5px;
  }
  .town:before {
    content: '';
    width: 1px;
    height: 10px;
    left: 0;
    top: 4px;
    background: #bcbcbc;
    position: absolute;
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const DateWrap = styled.div`
  position: absolute;
  top: 0px;
  right: 6px;
  font-size: 11px;
  color: ${({ theme }) => theme.color.black_2};
  line-height: 28px;
  margin-bottom: auto;
`;
