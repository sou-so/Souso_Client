import styled from 'styled-components';

export const WriterContainer = styled.div`
  display: flex;
  padding: 20px 5px 0;
`;

export const UserInfo = styled.div`
  display: flex;
  > p {
    font-size: 16px;
    line-height: 28px;
    padding: 0 6px 0 11px;
  }
  > div {
    display: flex;
    font-size: 11px;
    line-height: 28px;
    p:first-child {
      padding-right: 5px;
    }
    p:last-child {
      padding-left: 5px;
    }
  }
`;
