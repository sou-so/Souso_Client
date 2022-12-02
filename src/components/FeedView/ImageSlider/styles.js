import styled from 'styled-components';

export const ContentsContainer = styled.div`
  .swiper-pagination {
    position: relative;
  }
  .swiper-pagination-bullet {
    width: 4px;
    height: 4px;
    margin: 0 1.5px !important;
  }
  .swiper-pagination-bullet-active {
    background-color: #343434;
  }
`;

export const ThumbnailWrap = styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: 12px;
  img {
    border-radius: 12px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
