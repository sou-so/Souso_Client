import styled from 'styled-components';

export const PostContainer = styled.li`
  border-radius: 12px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  & + & {
    margin-top: 15px;
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-bottom: ${({ theme }) => theme.style.border_light};
  display: block;
`;

export const ContentWrap = styled.div`
  position: relative;
  margin: 15px;
`;
