import styled from 'styled-components';

export const ListContainer = styled.div`
  margin-left: 5px;
`;

export const MonthSection = styled.section`
  margin-bottom: 25px;
`;

export const Month = styled.h3`
  font-weight: 500;
  padding-left: 18px;
  margin-bottom: 10px;
  position: relative;
  &:before {
    content: '';
    width: 8px;
    height: 8px;
    top: 5px;
    left: 0;
    border: 1px solid #555;
    border-radius: 50%;
    position: absolute;
  }
`;

export const MeetItem = styled.li`
  padding: 10px 0 25px 20px;
  font-size: 11px;
  margin-top: -5px;
  position: relative;
  b {
    font-weight: 400;
  }
  &:after {
    content: '';
    background-color: ${({ theme }) => theme.color.main};
    opacity: ${({ opacity }) => opacity};
    width: 9px;
    height: 100%;
    border-radius: 10px;
    left: 0;
    top: 0;
    position: absolute;
  }
  &:before {
    content: '';
    background-color: #fff;
    width: 9px;
    height: 100%;
    border-radius: 10px;
    left: 0;
    top: 0;
    position: absolute;
  }
`;

export const MeetTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin: 4px 0 2px;
  position: relative;
  span {
    margin-left: 10px;
    font-weight: 400;
    top: 2px;
    position: absolute;
  }
`;
