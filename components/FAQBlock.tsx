'use client';

import { Disclosure } from '@headlessui/react';

import { H2, H3 } from '@/components/Typography';
import Image from 'next/image';
import faqImg from '@/public/images/faq.png';
import { FC, PropsWithChildren } from 'react';
type CustomDisclosureButtonProps = {
  open: boolean;
  onToggle?: () => void;
};

const CustomDisclosureButton: FC<
  PropsWithChildren<CustomDisclosureButtonProps>
> = ({ open, onToggle, children }) => {
  return (
    <Disclosure.Button
      className="flex w-full justify-between text-[20px] font-bold leading-8 text-text-neutral text-left mb-2"
      onClick={onToggle}
    >
      <span>{children}</span>
      <div className={'w-6 h-6 flex-0'}>
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M5 12.5H19"
              stroke="#212121"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M12 5.5V19.5"
              stroke="#212121"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 12.5H19"
              stroke="#212121"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    </Disclosure.Button>
  );
};

const CustomDisclosurePanel: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Disclosure.Panel className={`text-text-primary-light'`}>
      {children}
    </Disclosure.Panel>
  );
};

const DisclosureContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className={'py-4 md:py-8 border-b border-[#EAECF0] last-of-type:border-0'}
    >
      {children}
    </div>
  );
};

const questions = [
  {
    question: 'What makes your budgeting app stand out from the others?',
    answer:
      "Our app is designed to minimize your time spent on managing your child's allowance, giving you more quality moments to connect and enjoy family time.",
  },
  {
    question: 'How much does it cost?',
    answer:
      'Our app is free to use. We do not charge any fees for using our app.',
  },
  {
    question: 'Does it work on Android and iOS?',
    answer:
      'Yes, our app works on both Android and iOS. You can download our app from the Google Play Store and Apple App Store.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Press the button above to sign up for an account. Once you have signed up, you can add your children and start managing their allowance.',
  },
  {
    question: 'Can children use the app themselves?',
    answer:
      'Yes, children can use the app themselves. They can view their allowance balance, manage goals, track expenses.',
  },
  {
    question: 'Can I share the app with a relative?',
    answer:
      'Yes, you can share the app with your spouse or any other person you know.',
  },
  {
    question: 'Can I add multiple children?',
    answer:
      'Yes, you can add multiple children. You can add as many children as you want.',
  },
  {
    question: 'Can I add multiple parents?',
    answer:
      'Yes, you can add multiple parents. You can add as many parents as you want.',
  },
];

export default function FAQBlock() {
  return (
    <section className={'md:flex mt-10 md:my-28'}>
      <div className={'w-1/3 mr-28'}>
        <H2 id="faq">FAQs</H2>
        <H3>Frequantly Asked Questions</H3>
        <div className={'hidden md:block md:mt-[20px]'}>
          <Image src={faqImg} alt={'FAQ'} />
        </div>
      </div>

      <div className="w-full">
        {questions.map((question, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <DisclosureContainer>
                <CustomDisclosureButton open={open}>
                  {question.question}
                </CustomDisclosureButton>
                <CustomDisclosurePanel>{question.answer}</CustomDisclosurePanel>
              </DisclosureContainer>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
  );
}
