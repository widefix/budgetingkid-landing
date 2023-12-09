'use client';

import { H2, H3 } from './Typography';

import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { PropsWithChildren, useRef, useState } from 'react';
import classNames from 'classnames';
import Image from 'next/image';

const TP: React.FC<PropsWithChildren> = ({ children }) => (
  <p className={'text-[20px] leading-7 text-[#33273D]'}>{children}</p>
);

const Testimonial: React.FC<{
  name: string;
  title: string;
  body: string;
  img: any;
}> = ({ name, title, body, img }) => (
  <div className={'p-[20px]'}>
    <blockquote className={'text-[20px] leading-7 text-[#33273D] mb-6'}>
      &quot;{body}&quot;
    </blockquote>
    <div className="flex items-center">
      <Image src={img} alt={name} style={{ borderRadius: '50%' }} />
      <div className={'ml-6 flex items-center'}>
        <h5 className={'font-bold leading-7 text-[#33273D]'}>{name}</h5>
        <div className={'w-[1px] mx-2 h-6 bg-[#DBD2E3]'}></div>
        <p className={'leading-7 text-[#33273D]'}>{title}</p>
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
    <section className="md:grid md:grid-cols-2 pt-24 md:pt-32">
      <div>
        <div className={'max-w-sm'}>
          <H2>Testimonials</H2>
          <H3>Listen what others say about us</H3>
        </div>
        <div className={'flex mt-8 md:mt-24'}>
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
            <Testimonial
              title="Washington, PA - United States"
              body="It's some what use full, It have good value for families and for childrens to manage the usage of money in digital way also can share each athers"
              name="Rickea Smith"
              img={require('@/public/images/ricke_s.jpeg')}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial
              title="Goodyear, AZ - United States"
              body="It is a good introduction to money management"
              name="Brenda Becker"
              img={require('@/public/images/brenda_b.jpeg')}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial
              title="Phoenix, AZ - United States"
              body="I find this useful as it gives my kids financial responsibility and also teaches about savings and goals. I love it!"
              name="Sindhuja M"
              img={require('@/public/images/sindhupec.jpeg')}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial
              title="Freiburg, Baden-Württemberg - Germany"
              body="I thoroughly enjoyed the straightforwardness, simplicity and ease of use of the product and I would recommend resisting the urge to add more and more features and keep focusing on the essentials."
              name="Sam Harris"
              img={require('@/public/images/ricke_s.jpeg')}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
