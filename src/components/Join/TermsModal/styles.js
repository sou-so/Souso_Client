import styled from 'styled-components';

export const PageContainer = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
`;

export const TermsView = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: #fff;
  border: 1px solid #000;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-weight: bold;
    font-size: 16px;
    padding: 15px;
  }
  div {
    padding: 0px 20px;
    width: 250px;
    overflow-y: auto;
  }
  P {
    padding: 15px;
    font-weight: bold;
    cursor: pointer;
  }
`;
