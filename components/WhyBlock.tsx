'use client';
import { H2, H3, H4, P } from '@/components/Typography';

import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';

import './Slider.css';
import { PropsWithChildren, useRef } from 'react';

import Image from 'next/image';

import slide1Img from '@/public/images/slide1.png';
import slide2Img from '@/public/images/slide2.png';
import slide3Img from '@/public/images/slide3.png';
import slide4Img from '@/public/images/slide4.png';
import slide5Img from '@/public/images/slide5.png';

type OutsideSliderControlsProps = {
  onNext: () => void;
  onPrev: () => void;
};

const OutsideSliderControls: React.FC<OutsideSliderControlsProps> = ({
  onNext,
  onPrev,
}) => (
  <div className={'ml-auto flex gap-9'}>
    <button onClick={onPrev} aria-label={'Previous slide'}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="37"
        fill="none"
        viewBox="0 0 36 37"
      >
        <circle cx="18" cy="18.5" r="18" fill="#639"></circle>
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M23.25 18.5h-10.5M18 23.75l-5.25-5.25L18 13.25"
        ></path>
      </svg>
    </button>
    <button onClick={onNext} aria-label={'Next slide'}>
      {' '}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="37"
        fill="none"
        viewBox="0 0 36 37"
      >
        <circle cx="18" cy="18.5" r="18" fill="#639"></circle>
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12.75 18.5h10.5M18 23.75l5.25-5.25L18 13.25"
        ></path>
      </svg>
    </button>
  </div>
);

const SwiperSlideContent: React.FC<PropsWithChildren> = ({ children }) => (
  <div
    className={
      'px-3 py-8 rounded-[20px] bg-white shadow-2xl flex flex-col items-center text-center h-full'
    }
  >
    {children}
  </div>
);

const Pill: React.FC<PropsWithChildren> = ({ children }) => (
  <div
    className={
      'bg-background-global rounded-full px-[17px] py-2 text-xs font-medium text-style border-style border-[1px] mt-8 mb-4'
    }
  >
    {children}
  </div>
);

export default function WhyBlock() {
  const swiperRef = useRef<SwiperRef | null>(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current?.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current?.swiper.slidePrev();
    }
  };

  return (
    <section>
      <H2>Why use Budgetingkid?</H2>
      <div className="flex">
        <H3>Manage finance for kids like never before</H3>
        <OutsideSliderControls onNext={handleNext} onPrev={handlePrev} />
      </div>
      <div className="pt-16 pb-32">
        <Swiper
          autoHeight={false}
          ref={swiperRef}
          spaceBetween={24}
          slidesPerView={3}
          className={'overflown'}
        >
          <SwiperSlide>
            <SwiperSlideContent>
              <Image src={slide1Img} alt={'Slide 1'} />
              <Pill>Management</Pill>
              <H4>Simplify Toy Management</H4>
              <P>
                Tired of the toy clutter at home? Our app helps you regain
                control of toy purchases, ensuring your space stays tidy and
                organized.
              </P>
            </SwiperSlideContent>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideContent>
              <Image src={slide2Img} alt={'Slide 2'} />
              <Pill>Investment</Pill>
              <H4>Financial Wellness</H4>
              <P>
                Manage your child&apos;s toy expenses effortlessly, allowing you
                to allocate your resources wisely for more important
                investments, such as education and healthcare.
              </P>
            </SwiperSlideContent>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideContent>
              <Image src={slide3Img} alt={'Slide 3'} />
              <Pill>Convenience</Pill>
              <H4>Convenient Allowance Management</H4>
              <P>
                Our app offers hassle-free allowance management for parents,
                eliminating the need for cash and manual payments.
              </P>
            </SwiperSlideContent>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideContent>
              <Image src={slide4Img} alt={'Slide 4'} />
              <Pill>Responsibility</Pill>
              <H4>Track Spending and Foster Responsibility</H4>
              <P>
                Keep a close eye on your children&apos;s spending habits with
                our app. It empowers parents to teach financial responsibility
                while monitoring their kids&apos; financial activities.
              </P>
            </SwiperSlideContent>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideContent>
              <Image src={slide5Img} alt={'Slide 5'} />
              <Pill>Education</Pill>
              <H4>Financial Education for Kids</H4>
              <P>
                Empower your children with valuable financial skills. Our app
                serves as a teaching tool, helping kids understand money
                management and the importance of financial literacy.
              </P>
            </SwiperSlideContent>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
