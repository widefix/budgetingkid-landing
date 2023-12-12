'use client';

import { useRef } from 'react';
import Button from '@/components/Button';

const callSubscribe = (email: string) => {
  fetch('https://budgetingkid.com/subscribers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  }).then((res) => {
    if (res.ok) {
      alert('Thank you for subscribing!');
    }
  });
};

export default function Subscribe() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <dl className={'mt-4 lg:mt-0'}>
        <dt>Subscribe</dt>
        <dd>
          <p className={'font-light text-text-primary-light mb-[20px]'}>
            Subscribe to stay up to date with all the latest news related to
            BudgetingKid and financial literacy.
          </p>
          <div className={'flex gap-2 items-center'}>
            <input
              className={
                'w-full border border-[#E7E7E7] rounded-[6px] py-3 px-4'
              }
              type="email"
              placeholder={'Your email'}
              ref={inputRef}
            />
            <Button
              onClick={() => {
                const email = inputRef?.current?.value;
                if (email) {
                  callSubscribe(email);
                  inputRef.current.value = '';
                }
              }}
            >
              Subscribe
            </Button>
          </div>
        </dd>
      </dl>
    </div>
  );
}
