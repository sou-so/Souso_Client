import styled from 'styled-components';

export const ContentsContainer = styled.div`
  padding: 0 5px 0;
  .swiper-silde {
    width: 292px;
  }
  .swiper-pagination {
    position: relative;
    padding-top: 9px;
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

export const PostText = styled.div`
  font-size: 16px;
  padding: 11px 0 10px;
`;

export const ThumbnailWrap = styled.div`
  width: 292px;
  height: 292px;
  img {
    border-radius: 12px;
    width: 100%;
    height: 100%;
  }
`;
