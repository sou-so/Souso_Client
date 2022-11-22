import styled from 'styled-components';

export const TermsWarp = styled.div`
  display: flex;
  align-items: center;
  margin: 0 5px;
  font-size: 13px;
  label {
    cursor: pointer;
  }
`;

export const AgreeBtn = styled.label`
  position: relative;
  width: 13px;
  height: 13px;
  margin-right: 5px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.color.gray_2};
  &.active {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${({ theme }) => theme.color.main};
    &::before {
      content: '';
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: ${({ theme }) => theme.color.main};
      position: absolute;
    }
  }
  & + input {
    display: none;
  }
`;

export const TermsBtn = styled.span`
  margin-left: auto;
  color: #999;
  border-bottom: 1px solid #999;
  cursor: pointer;
  font-size: 0.85rem;
`;
