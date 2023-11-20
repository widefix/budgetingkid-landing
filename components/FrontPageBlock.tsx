import classNames from 'classnames';

import frontBlockImg from '/public/images/front-block.png';
import Image from 'next/image';
import Button from '@/components/Button';
import Link from 'next/link';
import { Frank_Ruhl_Libre } from 'next/font/google';
const frankRuhlLibre = Frank_Ruhl_Libre({ subsets: ['latin'] });

export default function FrontPageBlock() {
  return (
    <section className={'p-[10px] mt-[100px] flex'}>
      <div className={'w-[658px]'}>
        <h1
          className={classNames(
            frankRuhlLibre.className,
            'text-white text-[64px] font-bold leading-[68px]'
          )}
        >
          Foster good financial habits in your kids just 5 minutes a week
        </h1>
        <div className={'mt-[48px] flex gap-9'}>
          <Button className={'flex gap-2'} type={'plain'} as={Link} href={'/'}>
            <span className={'text-center text-xl font-medium leading-7'}>
              Get Started for free
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              fill="none"
              viewBox="0 0 18 19"
            >
              <path
                stroke="#639"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3.75 9.5h10.5M9 14.75l5.25-5.25L9 4.25"
              ></path>
            </svg>
          </Button>
          <Button
            className={'border-white text-white'}
            type={'outline'}
            as={Link}
            href={'/'}
          >
            Learn More
          </Button>
        </div>
      </div>
      <div className="w-[438px] h-[386px] ml-auto relative">
        <Image src={frontBlockImg} alt={'Money jar'} objectFit={'cover'} />
      </div>
    </section>
  );
}
