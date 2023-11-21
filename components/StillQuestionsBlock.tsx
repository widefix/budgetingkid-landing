import { H3 } from '@/components/Typography';
import Button from '@/components/Button';
import Link from 'next/link';
import Image from 'next/image';

import piggyBankImg from '@/public/images/piggybank.png';

export default function StillQuestionsBlock() {
  return (
    <section className={'grid grid-cols-2'}>
      <div className={'flex justify-center flex-col'}>
        <H3 className={'text-white mb-[20px]'}>Still have Questions?</H3>
        <p className={'mb-8 text-white'}>
          Send us a message and We’ll be back to you within 24 hours
        </p>
        <Button className={'flex gap-2'} type={'plain'} as={Link} href={'/'}>
          <span className={'text-center text-xl font-medium leading-7'}>
            Get In Touch
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
      </div>
      <div className={'flex'}>
        <div className={'ml-auto'}>
          <Image src={piggyBankImg} alt={'Piggy Bank'} />
        </div>
      </div>
    </section>
  );
}
