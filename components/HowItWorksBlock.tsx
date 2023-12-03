import { H2, H3, H4, P } from '@/components/Typography';

import Image from 'next/image';

import hiw1Img from '@/public/images/hiw1.png';
import hiw2Img from '@/public/images/hiw2.png';
import hiw3Img from '@/public/images/hiw3.png';
import hiw4Img from '@/public/images/hiw4.png';
import Button from '@/components/Button';
import Link from 'next/link';

export default function HowItWorksBlock() {
  return (
    <section className={'pb-10 md:pb-24'}>
      <div className={'mt-10 md:mt-24 mb-16 md:text-center'}>
        <H2>How it works</H2>
        <H3> Budgeting your kids finance simpified</H3>
      </div>
      <div className="md:grid md:grid-cols-2 gap-6">
        <div className={'flex flex-col p-[20px]'}>
          <div className={'mb-4'}>
            <Image src={hiw1Img} alt={'Phone'} />
          </div>
          <H4 className="text-2xl ml-2">1. Sign Up</H4>
          <P>Start your journey by signing up for our service.</P>
        </div>
        <div className={'flex flex-col p-[20px]'}>
          <div className={'mb-4'}>
            <Image src={hiw2Img} alt={'Money bag'} />
          </div>
          <H4 className="text-2xl ml-2">2. Create Your Kid&apos;s Account</H4>
          <P>Set up a dedicated account for your child.</P>
        </div>
        <div className={'flex flex-col p-[20px]'}>
          <div className={'mb-4'}>
            <Image src={hiw3Img} alt={'Calendar'} />
          </div>
          <H4 className="text-2xl ml-2">3. Specify Weekly Pocket Money</H4>
          <P>
            Explain your child&apos;s weekly allowance or &apos;likes&apos;
            using simple terms, like 1 like equals 1$ in the US. Input this
            budget into the system, and it automatically calculates the balance.
          </P>
        </div>
        <div className={'flex flex-col p-[20px]'}>
          <div className={'mb-4'}>
            <Image src={hiw4Img} alt={'Wallet'} />
          </div>
          <H4 className="text-2xl ml-2">
            4. Track Kid Expenses and Share Access
          </H4>
          <P>
            Easily monitor your child&apos;s spending, set savings goals, and
            share account access with family members for collaborative
            management.
          </P>
        </div>
      </div>
      <div className={'mt-[20px]'}>
        <Button
          className={'mx-auto'}
          as={Link}
          href={'https://budgetingkid.com/users/sign_up'}
        >
          <div className={'flex gap-2 items-center'}>
            <span className={'text-center text-xl font-medium leading-7'}>
              Get Started for free
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="18"
              fill="none"
              viewBox="0 0 19 18"
            >
              <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.25 9h10.5M9.5 14.25L14.75 9 9.5 3.75"
              ></path>
            </svg>
          </div>
        </Button>
      </div>
    </section>
  );
}
