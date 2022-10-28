import styled from 'styled-components';
import { button } from 'styles/Shared';

export const Overlay = styled.div`
  position: absolute;
  padding: 0 17px;
  background: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  position: relative;
  width: 100%;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.25);
  border-radius: 13px;
  background: #fff;
  padding: 40px 15px 20px;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
`;

export const IconWrap = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  padding-top: 13px;
  width: 70px;
  height: 70px;
  left: 50%;
  top: -38px;
  transform: translateX(-50%);
  background: #fff;
  border-radius: 50%;
`;

export const TextWrap = styled.div`
  p:nth-of-type(1) {
    font-size: ${({ theme }) => theme.font.md};
    span {
      color: ${({ theme }) => theme.color.main};
      font-weight: bold;
    }
  }
  p:nth-of-type(2) {
    margin: 15px 0 6px;
  }
  p:nth-of-type(3) {
    font-size: ${({ theme }) => theme.font.sm};
  }
`;

export const SubmitButton = styled.button`
  ${button}
  margin-top: 30px;
  width: 140px;
`;
