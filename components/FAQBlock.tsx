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

export default function FAQBlock() {
  return (
    <section className={'md:flex mt-10 md:my-28'}>
      <div className={'w-1/3 mr-28'}>
        <H2>FAQs</H2>
        <H3>Frequantly Asked Questions</H3>
        <div className={'hidden md:block md:mt-[20px]'}>
          <Image src={faqImg} alt={'FAQ'} />
        </div>
      </div>

      <div className="w-full">
        <Disclosure>
          {({ open }) => (
            <DisclosureContainer>
              <CustomDisclosureButton open={open}>
                Does Budgeting app work on Safari or other browsers?
              </CustomDisclosureButton>
              <CustomDisclosurePanel>
                Currently, we only have the Chrome extension. Safari plugin will
                be available in 2 months. Sign up at the wait-list here
              </CustomDisclosurePanel>
            </DisclosureContainer>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <DisclosureContainer>
              <CustomDisclosureButton open={open}>
                Does it work on mobile?
              </CustomDisclosureButton>
              <CustomDisclosurePanel>
                Currently, we only have the Chrome extension. Safari plugin will
                be available in 2 months. Sign up at the wait-list here
              </CustomDisclosurePanel>
            </DisclosureContainer>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <DisclosureContainer>
              <CustomDisclosureButton open={open}>
                How can I install Budgeting kid on an Android device?
              </CustomDisclosureButton>
              <CustomDisclosurePanel>
                Currently, we only have the Chrome extension. Safari plugin will
                be available in 2 months. Sign up at the wait-list here
              </CustomDisclosurePanel>
            </DisclosureContainer>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <DisclosureContainer>
              <CustomDisclosureButton open={open}>
                How can I install Budgetingkid on an iPhone or iPad?
              </CustomDisclosureButton>
              <CustomDisclosurePanel>
                Currently, we only have the Chrome extension. Safari plugin will
                be available in 2 months. Sign up at the wait-list here
              </CustomDisclosurePanel>
            </DisclosureContainer>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <DisclosureContainer>
              <CustomDisclosureButton open={open}>
                How can I install Budgetingkid on SmartTV?
              </CustomDisclosureButton>
              <CustomDisclosurePanel>
                Currently, we only have the Chrome extension. Safari plugin will
                be available in 2 months. Sign up at the wait-list here
              </CustomDisclosurePanel>
            </DisclosureContainer>
          )}
        </Disclosure>
      </div>
    </section>
  );
}
