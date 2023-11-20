import { Frank_Ruhl_Libre } from 'next/font/google';
import { PropsWithChildren } from 'react';
import classNames from 'classnames';
const frankRuhlLibre = Frank_Ruhl_Libre({ subsets: ['latin'] });
export function H2({ children }: PropsWithChildren) {
  return (
    <h2 className={'text-style text-xl font-medium leading-7 mb-4'}>
      {children}
    </h2>
  );
}

export function H3({ children }: PropsWithChildren) {
  return (
    <h3
      className={classNames(
        frankRuhlLibre.className,
        'text-text-primary-light text-[44px] font-bold leading-[48px]'
      )}
    >
      {children}
    </h3>
  );
}

type H4Props = {
  className?: string;
};

export function H4({ children, className }: PropsWithChildren<H4Props>) {
  return (
    <h4
      className={classNames(
        frankRuhlLibre.className,
        'text-text-primary-light text-[32px] font-medium tracking-tight mb-4',
        className
      )}
    >
      {children}
    </h4>
  );
}

type PProps = {
  className?: string;
};

export function P({ children, className }: PropsWithChildren<PProps>) {
  return (
    <p
      className={`text-base font-normal text-text-primary-light ${
        className || ''
      }`}
    >
      {children}
    </p>
  );
}
