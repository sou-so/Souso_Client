import React from 'react';
import * as S from './styles';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const ImageSlider = ({ imgData }) => {
  return (
    <S.ContentsContainer>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        pagination={{ clickable: false }}
        spaceBetween={8}
        slidesPerView={1}
        width={292}
        height={292}
      >
        {imgData.map((url, i) => (
          <SwiperSlide key={i}>
            <S.ThumbnailWrap>
              <img src={url} alt="thumbnail" />
            </S.ThumbnailWrap>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.ContentsContainer>
  );
};
