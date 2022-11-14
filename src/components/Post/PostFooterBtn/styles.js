import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 5px;
  padding: 8px 0 12px;
  border-top: 1px solid rgba(217, 217, 217, 0.4);
  border-bottom: 1px solid rgba(217, 217, 217, 0.4);
`;

export const BtnContainer = styled.div`
  display: flex;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-size: 13px;
      line-height: 19.5px;
      padding-left: 4px;
    }
  }
  & + & {
    margin-left: 11px;
  }
`;

export const DetailWrap = styled.div`
  display: flex;
  font-size: 11px;
  line-height: 28px;
  span {
    padding: 0 4px;
  }
`;
