import styled from 'styled-components';

export const SectionContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  top: 58%;
  border-radius: 12px 12px 0px 0px;
  padding: 0 ${({ theme }) => theme.style.edge_padding};

  box-shadow: 0 3px 3px 3px rgba(0, 0, 0, 0.24);
  position: absolute;
  z-index: 1000;

  &:before {
    content: '';
    width: 80px;
    height: 4px;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    background: ${({ theme }) => theme.color.gray_2};
    border-radius: 40px;
    position: absolute;
    cursor: pointer;
  }
  p {
    font-size: 13px;
    color: #bbb;
    text-align: center;
    margin-top: 30px;
  }
`;
