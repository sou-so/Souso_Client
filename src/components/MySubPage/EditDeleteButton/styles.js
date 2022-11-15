import styled from 'styled-components';

export const ButtonContainer = styled.ul`
  display: inline-block;
  border-radius: 4px;
  width: 80px;
  background: ${({ theme }) => theme.color.main};

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 6px 2px;
    font-size: ${({ theme }) => theme.font.xs};
    color: rgba(255, 255, 255, 0.85);
    &:last-child {
      border-top: 1px solid rgba(255, 255, 255, 0.3);
    }
    div {
      margin-right: 3px;
    }
  }
`;
