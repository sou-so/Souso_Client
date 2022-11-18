import styled from 'styled-components';

export const LinkBoxContainer = styled.li`
  flex-basis: 33.33%;
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
    margin-top: -3px;
  }

  & + li {
    margin-left: 15px;
  }
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-left: auto;
    width: 23px;
    height: 23px;
    background: ${({ theme }) => theme.color.main};
  }
`;

export const BoxName = styled.h3`
  margin: 20px 0 3px;
  font-size: 15px;
  font-weight: 600;
`;

export const Count = styled.p`
  span {
    margin-right: 5px;
    font-weight: 400;
    font-size: ${({ theme }) => theme.font.xs};
    color: ${({ theme }) => theme.color.black_3};
  }
`;
