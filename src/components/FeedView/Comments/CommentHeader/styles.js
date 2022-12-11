import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: auto;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  line-height: 1;
  .name {
    font-size: 15.5px;
    padding: 0 8px 0 11px;
  }
  span {
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
