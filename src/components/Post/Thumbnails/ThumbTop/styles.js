import styled from 'styled-components';

export const PostContainer = styled.div`
  border-radius: 12px;
  margin: 0 15px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  cursor: pointer;
  & + & {
    margin-top: 15px;
  }
  &:last-child {
    margin-bottom: 50px;
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

export const ButtonWrap = styled.div`
  & > .icon {
    position: absolute;
    right: 5px;
    top: 0;
  }
  ul {
    position: absolute;
    right: 0;
    top: 20px;
  }
`;
