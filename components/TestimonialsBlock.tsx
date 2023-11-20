'use client';

import { H2, H3 } from './Typography';

import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import { PropsWithChildren, useRef, useState } from 'react';

const TP: React.FC<PropsWithChildren> = ({ children }) => (
  <p className={'text-[20px] leading-7 text-[#33273D]'}>{children}</p>
);

export default function TestimonialsBlock() {
  const swiperRef = useRef<SwiperRef | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleSlideChange = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      setActiveIndex(swiperRef.current.swiper.activeIndex);
    }
  };

  const handlePaginationClick = (index: number) => {
    if (swiperRef.current && swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <section className="grid grid-cols-2 gap-12">
      <div>
        <div className={'max-w-1/5'}>
          <H2>Testimonials</H2>
          <H3>Listen what others say about us</H3>
        </div>
      </div>
      <div>
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          onSlideChange={handleSlideChange}
          className="custom-swiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
