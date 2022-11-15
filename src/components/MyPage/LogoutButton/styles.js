import styled from 'styled-components';

export const ButtonContainer = styled.div`
  margin: auto 0 15px;
  text-align: center;
  button {
    font-size: ${({ theme }) => theme.font.xs};
    color: ${({ theme }) => theme.color.black_3};
    position: relative;
  }

  button + button {
    margin-left: 10px;
    padding-left: 10px;
    &:before {
      content: '';
      width: 0.6px;
      height: 10px;
      position: absolute;
      left: 0;
      top: 4px;
      background-color: ${({ theme }) => theme.color.black_3};
    }
  }
`;
