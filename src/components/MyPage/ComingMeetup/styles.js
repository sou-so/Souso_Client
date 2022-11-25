import styled from 'styled-components';
import { button } from 'styles/Shared';

export const MeetupItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 0;
  font-size: ${({ theme }) => theme.font.sm};

  & > * + * {
    margin-left: 4px;
  }

  & + li {
    border-top: ${({ theme }) => theme.style.border_light};
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  .day {
    width: 50px;
    text-align: center;
  }

  p {
    font-size: 14px;
    font-weight: 500;
  }
`;

export const Keywords = styled.div`
  font-size: ${({ theme }) => theme.font.xs};
  color: ${({ theme }) => theme.color.black_3};
  span + span {
    margin-left: 5px;
  }
`;

export const JoinButton = styled.button`
  ${button}
  margin-left: auto;
  font-size: ${({ theme }) => theme.font.xs};
  width: 60px;
  padding: 6px 0;
`;
