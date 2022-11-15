import styled from 'styled-components';
import { button } from 'styles/Shared';

export const MeetupItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  font-size: ${({ theme }) => theme.font.sm};

  & + li {
    border-top: ${({ theme }) => theme.style.border_light};
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .day {
    width: 50px;
    text-align: center;
  }

  .name {
    font-size: 15px;
    font-weight: 500;
  }
`;

export const Keywords = styled.div`
  font-size: ${({ theme }) => theme.font.xs};
  color: ${({ theme }) => theme.color.black_3};
  span + span {
    margin-left: 7px;
  }
`;

export const JoinButton = styled.button`
  ${button}
  width: 80px;
  padding: 6px 0;
`;
