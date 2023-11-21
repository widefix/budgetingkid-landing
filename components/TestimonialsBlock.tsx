'use client';

import { H2, H3 } from './Typography';

import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { PropsWithChildren, useRef, useState } from 'react';
import classNames from 'classnames';
import Image from 'next/image';

import mordaImg from '@/public/images/morda.png';

const TP: React.FC<PropsWithChildren> = ({ children }) => (
  <p className={'text-[20px] leading-7 text-[#33273D]'}>{children}</p>
);

const Testimonial: React.FC = () => (
  <div className={'p-[20px]'}>
    <blockquote className={'text-[20px] leading-7 text-[#33273D] mb-6'}>
      &quot;At Boosted Commerce, we are in the business of scaling Shopify
      stores efficiently. We use Nostra to run sophisticated real time
      personalization that significantly increases our conversion rate.&quot;
    </blockquote>
    <div className="flex items-center">
      <Image src={mordaImg} alt={'Juan Paul Morda'} />
      <div className={'ml-6 flex items-center'}>
        <h5 className={'font-bold leading-7 text-[#33273D]'}>
          Juan Paul Morda
        </h5>
        <div className={'w-[1px] mx-2 h-6 bg-[#DBD2E3]'}></div>
        <p className={'leading-7 text-[#33273D]'}>CTO Boosted Commerce</p>
      </div>
    </div>
  </div>
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
    <section className="grid grid-cols-2 pt-32">
      <div>
        <div className={'max-w-sm'}>
          <H2>Testimonials</H2>
          <H3>Listen what others say about us</H3>
        </div>
        <div className={'flex mt-24'}>
          {[...Array(4)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePaginationClick(index)}
              className={'p-3'}
              aria-label={`Go to testimonial ${index + 1}`}
              style={{ fontWeight: activeIndex === index ? 'bold' : 'normal' }}
            >
              <div
                className={classNames('w-9 h-[5px] rounded', {
                  'bg-primary-disabled': activeIndex !== index,
                  'bg-style': activeIndex === index,
                })}
              ></div>
            </button>
          ))}
        </div>
      </div>
      <div>
        <Swiper
          ref={swiperRef}
          modules={[Autoplay]}
          slidesPerView={1}
          onSlideChange={handleSlideChange}
          className="custom-swiper"
          autoplay={{ delay: 5000 }}
        >
          <SwiperSlide>
            <Testimonial />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
