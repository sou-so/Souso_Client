import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const UserInfo = styled.div`
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
  margin-left: 11px;
`;
