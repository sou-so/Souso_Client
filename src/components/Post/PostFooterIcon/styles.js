import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  margin-left: 4px;
`;

export const IconList = styled.ul`
  display: flex;

  li {
    display: flex;
    align-items: center;
    font-size: 12px;
    opacity: 0.5;
    & + li {
      margin-left: 9px;
    }
  }

  .icon {
    margin-right: 2px;
  }
`;
