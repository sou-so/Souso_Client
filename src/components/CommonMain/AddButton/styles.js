import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FeedAddBtn = styled(Link)`
  width: 45px;
  height: 45px;
  position: absolute;
  right: 25px;
  bottom: 20px;
  padding: 8px 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background-color: ${({ theme }) => theme.color.main};
  border-radius: 50% 50% 0 50%;
  z-index: 9999;

  svg * {
    fill: #fff;
  }
`;
