import styled from 'styled-components';

export const PostContainer = styled.li`
  display: flex;
`;

export const Contents = styled.div`
  flex: 1;
`;

export const Thumbnail = styled.div`
  width: 115px;
  height: 115px;
  margin-left: 15px;
  border: ${({ theme }) => theme.style.border_light};
  overflow: hidden;
  border-radius: 12px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  span {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 32px;
    padding: 6px 0;
    font-size: 11px;
    color: #fff;
    border-radius: 2px;
    background: #000;
    text-align: center;
    opacity: 0.75;
  }
`;
