import styled from 'styled-components';

export const MapContainer = styled.div`
  height: calc(100% - ${({ theme }) => theme.style.header_height});
  .kakao_map {
    width: 100%;
    height: 60%;
  }
`;
